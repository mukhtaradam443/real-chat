// 'use client';
// import { ButtonHTMLAttributes, FunctionComponent, useState } from 'react';
// import { signOut } from 'next-auth/react';
// import toast from 'react-hot-toast';
// import { Loader2, LogOut } from 'lucide-react';
// import Button from './ui/Button';

// interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

// const SignOutButton: FunctionComponent<SignOutButtonProps> = ({ ...props }) => {
//   const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
//   return (
//     <Button
//       {...props}
//       variant="ghost"
//       onClick={async () => {
//         setIsSigningOut(true);
//         try {
//           await signOut();
//         } catch (error) {
//           toast.error('There was problem signing out');
//         } finally {
//           setIsSigningOut(false);
//         }
//       }}
//     >
//       {isSigningOut ? (
//         <Loader2 className="animate-spin w-4 h-4" />
//       ) : (
//         <LogOut className="w-4 h-4" />
//       )}
//     </Button>
//   );
// };

// export default SignOutButton;

'use client';

import { ButtonHTMLAttributes, FunctionComponent, useState } from 'react';
import { signOut } from 'next-auth/react';
import toast from 'react-hot-toast';
import { Loader2, LogOut } from 'lucide-react';
import Button from './ui/Button';

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FunctionComponent<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      toast.error('There was a problem signing out');
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button
      {...props}
      variant="ghost"
      onClick={handleSignOut}
      aria-live="polite"
      aria-busy={isSigningOut}
    >
      {isSigningOut ? (
        <Loader2 className="animate-spin w-4 h-4" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
