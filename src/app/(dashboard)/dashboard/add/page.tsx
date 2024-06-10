import AddFriendButton from '@/components/AddFriendButton';
import { FunctionComponent } from 'react';

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">Add friend</h1>
      <AddFriendButton />
    </main>
  );
};

export default page;
