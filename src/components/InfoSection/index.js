import React, { Fragment } from "react";
import { Button } from "../ButtonElements";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImageWrap,
  Img,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  lightText,
  lightBg,
  id,
  img,
  topLine,
  darkText,
  description,
  buttonLabel,
  alt,
  imgStart,
  primary,
  dark2,
  dark,
  headLine,
}) => {
  return (
    <Fragment>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={"true"}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrap>
                <Img src={img} alt={alt} />
              </ImageWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </Fragment>
  );
};

export default InfoSection;
