import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAccessToken, usePrivy } from "@privy-io/react-auth";
import Head from "next/head";

async function verifyToken() {
  const url = "/api/verify";
  const accessToken = await getAccessToken();
  const result = await fetch(url, {
    headers: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined),
    },
  });

  return await result.json();
}

export default function DashboardPage() {
  const [verifyResult, setVerifyResult] = useState();
  const [signSuccess, setSignSuccess] = useState(false);
  const [signError, setSignError] = useState(null);
  const [signLoading, setSignLoading] = useState(false);
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    logout,
    linkEmail,
    linkWallet,
    unlinkEmail,
    linkPhone,
    unlinkPhone,
    unlinkWallet,
    linkGoogle,
    unlinkGoogle,
    linkTwitter,
    unlinkTwitter,
    linkDiscord,
    unlinkDiscord,
    signMessage,
  } = usePrivy();
// this sucks btw
  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  const numAccounts = user?.linkedAccounts?.length || 0;
  const canRemoveAccount = numAccounts > 1;

  const handleSignMessage = async () => {
    setSignLoading(true);
    setSignError(null);
    setSignSuccess(false);
    try {
      const message = "Sample message";
      const signature = await signMessage(message);
      console.log(signature);
      setSignSuccess(true);
    } catch (error) {
      console.error("Error signing message:", error);
      setSignError(error.message || "Unknown error occurred");
    } finally {
      setSignLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>i hate privy</title>
      </Head>

      <main className="flex flex-col min-h-screen px-4 sm:px-20 py-6 sm:py-10 bg-privy-light-blue">
        {ready && authenticated ? (
          <>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-semibold">i hate privy</h1>
              <button
                onClick={logout}
                className="text-sm bg-violet-200 hover:text-violet-900 py-2 px-4 rounded-md text-violet-700"
              >
                Logout
              </button>
            </div>
            <div className="mt-12 flex gap-4 flex-wrap">
              {/* Existing account linking/unlinking buttons go here */}

              <button
                onClick={handleSignMessage}
                className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white border-none"
                disabled={signLoading}
              >
                {signLoading ? "Signing..." : "Sign message"}
              </button>

              {signSuccess && (
                <p className="text-sm text-green-600">Message signed successfully!</p>
              )}
              {signError && (
                <p className="text-sm text-red-600">Error: {signError}</p>
              )}
            </div>

            {/* Additional information sections */}
          </>
        ) : null}
      </main>
    </>
  );
}

