import { auth, signOut } from "@/auth";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <main>
      <h1 className='h1-bold font-space-grotesk'>Hello, Next.js!</h1>

      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button className='mt-10' type='submit'>
          Log out
        </Button>
      </form>
    </main>
  );
}
