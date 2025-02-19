// 'use client';

// import { User } from 'lucide-react';
// import Link from 'next/link';
// import { FunctionComponent, useState } from 'react';

// interface FriendRequestsSidebarOptionProps {
//   sessionId: string;
//   initialUnseenRequestCount: number;
// }

// const FriendRequestsSidebarOption: FunctionComponent<
//   FriendRequestsSidebarOptionProps
// > = ({ initialUnseenRequestCount, sessionId }) => {
//   const [unseenRequestCount, setUnSeenResendCount] = useState<number>(
//     initialUnseenRequestCount
//   );
//   return (
//     <Link
//       href="/dashboard/requests"
//       className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
//     >
//       <div className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex w-6 h-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-md bg-white">
//         <User className="h-4 w-4" />
//       </div>
//       <p className="truncate">Friend request</p>

//       {unseenRequestCount > 0 ? (
//         <div className="rounded-full w-5 h-5 text-xs flex items-center justify-center text-white bg-indigo-600">
//           {unseenRequestCount}
//         </div>
//       ) : null}
//     </Link>
//   );
// };

// export default FriendRequestsSidebarOption;

'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';

interface FriendRequestsSidebarOptionProps {
  sessionId: string;
  initialUnseenRequestCount: number;
}

const FriendRequestsSidebarOption: FunctionComponent<
  FriendRequestsSidebarOptionProps
> = ({ initialUnseenRequestCount, sessionId }) => {
  const [unseenRequestCount, setUnseenRequestCount] = useState<number>(
    initialUnseenRequestCount
  );

  return (
    <Link
      href="/dashboard/requests"
      className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
    >
      <div className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex w-6 h-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-md bg-white">
        <User className="h-4 w-4" />
      </div>
      <p className="truncate">Friend request</p>

      {unseenRequestCount > 0 ? (
        <div className="rounded-full w-5 h-5 text-xs flex items-center justify-center text-white bg-indigo-600">
          {unseenRequestCount}
        </div>
      ) : null}
    </Link>
  );
};

export default FriendRequestsSidebarOption;
