'use client';
import { chatHrefConstruction } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { FunctionComponent, useEffect, useState } from 'react';

interface SidebarChatListProps {
  friends: User[];
  sessionId: string;
}

const SidebarChatList: FunctionComponent<SidebarChatListProps> = ({
  friends,
  sessionId,
}) => {
  const [unseenMessages, setUnseenMessages] = useState<Message[]>();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.includes('chat')) {
      setUnseenMessages((prev) => {
        return prev?.filter((msg) => !pathname.includes(msg.senderId));
      });
    }
  }, [pathname]);

  return (
    <ul role="list" className="max-h-[25rem] overflow-y-auto -mx-2 space-y-1 ">
      {friends.sort().map((friend) => {
        const unseenMessagesCount = unseenMessages?.filter((unseenMsg) => {
          return unseenMsg.senderId === friend.id;
        }).length;
        return (
          <li key={friend.id}>
            <a
              href={`/dashboard/chat/${chatHrefConstruction(
                sessionId,
                friend.id
              )}`}
            >
              hello lll
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarChatList;
