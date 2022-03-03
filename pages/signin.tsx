/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { NextPage } from 'next';
import { signIn, getProviders } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import aboutImage from '/public/images/signin-bg.jpg';
import Spacings from '../tokens/Spacings';

export type ProviderProps = {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
};

const signin: NextPage = ({ providers }: any) => {
  return (
    <>
      <FormWrapper image={aboutImage}>
        <FormContainer>
          {Object.values(providers as ProviderProps[]).map((provider) => {
            return (
              <StyledButton
                key={provider.name}
                buttonType={provider.id}
                onClick={() =>
                  signIn(provider.id, { callbackUrl: `${process.env.BASE_URL}dashboard` })
                }
              >
                Signin with {provider.name}
              </StyledButton>
            );
          })}
        </FormContainer>
      </FormWrapper>
    </>
  );
};

export default signin;

const StyledButton = styled.button<{ buttonType: string }>`
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: ${Spacings.small};
  min-width: 250px;
  background-color: ${(props) => (props.buttonType === 'github' ? 'black' : '#00ccff')};
  color: ${(props) => (props.buttonType === 'github' ? 'white' : 'black')};
  margin: ${Spacings.small};
`;

const FormContainer = styled.div`
  border: 1px solid gray;
  padding: ${Spacings.medium};
  background-color: white;
  opacity: 0.7;
`;

const FormWrapper = styled.div<{ image: StaticImageData }>`
  background-image: url(${(props) => props.image.src});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 6rem);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
