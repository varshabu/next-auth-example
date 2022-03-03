import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';
import MediaQueries from '../tokens/MediaQueries';
import Spacings from '../tokens/Spacings';
import { signOut, useSession } from 'next-auth/react';

const Navbar: FC = () => {
  const { data: session, status } = useSession();

  return (
    <Wrapper>
      <Title>TechBlog</Title>
      <StyledUnorderedList>
        <StyledList>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </StyledList>
        {status === 'authenticated' && session && (
          <StyledList>
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </StyledList>
        )}
        <StyledList>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
        </StyledList>
        {status === 'unauthenticated' && !session && (
          <StyledList>
            <Link href='/signin'>
              <a>Signin</a>
            </Link>
          </StyledList>
        )}
        {status === 'authenticated' && session && (
          <StyledList>
            <Link href='/api/auth/signout'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut({ callbackUrl: process.env.BASE_URL });
                }}
              >
                Signout
              </a>
            </Link>
          </StyledList>
        )}
      </StyledUnorderedList>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${Spacings.small} ${Spacings.large};
  z-index: 2;
  background-color: #222222;
  color: white;
  height: ${Spacings.xxxxxLarge};
`;

const Title = styled.h1`
  font-size: ${Spacings.large};
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const StyledList = styled.li`
  font-size: ${Spacings.medium};
  font-weight: 800;
  margin-left: ${Spacings.medium};
  text-transform: uppercase;

  ${MediaQueries.mobile} {
    font-size: ${Spacings.small};
  }
`;
