import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';

const Dashboard: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      // useSession can also be used for client side authentication
      const session = await getSession();
      console.log(session);
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Dashboard page user</h1>
    </>
  );
};

export default Dashboard;
