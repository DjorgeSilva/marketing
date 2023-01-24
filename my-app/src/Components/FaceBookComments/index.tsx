// -----------------------------------------------------
// IMPORTS
// -----------------------------------------------------
import React from "react";
import like_image from "../../assets/like.png";
import love_image from "../../assets/loveIcon.png";
import {
  CommentSection,
  FaceBookIcons,
  FaceBookText,
  LikeSection,
  MainFaceBookIContainer,
} from "./index.styles";
// -----------------------------------------------------
// FACEBOOK COMPONENT
// -----------------------------------------------------
export const Comments: React.FC = (): JSX.Element => {
  return (
    <MainFaceBookIContainer>
      <LikeSection>
        <FaceBookIcons src={like_image} />
        <FaceBookIcons src={love_image} />
        <FaceBookText>67.5k</FaceBookText>
      </LikeSection>
      <LikeSection>550 - Shares</LikeSection>

      <CommentSection></CommentSection>
    </MainFaceBookIContainer>
  );
};
