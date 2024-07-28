import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo" />
          <SignUp>get all there</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 07/26/23, the price of the
            Disney+ and the Disney bundle with increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  position: relative;
`;

const BgImage = styled.div`
background-image: url('/images/login-background.jpg');
height: 100%;
background-position: top;
background-repeat: no-repeat
background-size: cover;
position: absolute;
top: 0;
left: 0;
right: 0;
z-index: -1
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 0.1s;
`;
const CTALogoOne = styled.img`
  display: block;
  min-height: 1px;
  width: 100%;
`;

const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  background-color: #0063e5;
  color: #f9f9f9;
  padding: 16.5px;
  margin: 12px 0;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  letter-spacing: 2px;
  transition: all ease-in-out 0.1s;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.6px;
  margin-bottom: 24px;
`;

const CTALogoTwo = styled.img`
  display: block;
  max-width: 600px;
  width: 100%;
`;

export default Login;
