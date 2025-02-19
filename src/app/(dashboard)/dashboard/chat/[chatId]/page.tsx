import { fetchRedis } from '@/helpers/redis';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { messageArrayValidator } from '@/lib/validation/message';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    chatId: string;
  };
}

async function getChatMessages(chatId: string) {
  try {
    const result: string[] = await fetchRedis(
      'zrange',
      `chat:${chatId}:message`,
      0,
      -1
    );
    const dbMessage = result.map((message) => JSON.parse(message) as Message);

    const reversedDbMessage = dbMessage.reverse();

    const messages = messageArrayValidator.parse(reversedDbMessage);
    return messages;
  } catch (error) {
    notFound();
  }
}

const page = async ({ params }: PageProps) => {
  const { chatId } = params;
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  const { user } = session;

  const [userId1, userId2] = chatId.split('--');
  if ((user.id !== userId1, user.id !== userId2)) {
    return notFound();
  }

  const chatPartnerId = user.id === userId1 ? userId2 : userId1;
  const chatPartner = (await db.get(`user${chatPartnerId}`)) as User;
  const initialMessages = await getChatMessages(chatId);
  return <div>{params.chatId} </div>;
};

export default page;
