// -----------------------------------------------------
// IMPORTS
// -----------------------------------------------------
import React from "react";
import like_image from "../../assets/like.png";
import love_image from "../../assets/loveIcon.png";
import { faceBookCommentsMock } from "../../constants";

import {
  CommentContainer,
  CommentSection,
  CommentUserImage,
  FaceBookIcons,
  FaceBookText,
  LikeSection,
  MainFaceBookIContainer,
  UserCommentText,
  UserCommentTextWrapper,
} from "./index.styles";
// -----------------------------------------------------
// FACEBOOK COMPONENT
// -----------------------------------------------------
export const Comments: React.FC = (): JSX.Element => {
  return (
    <MainFaceBookIContainer>
      <LikeSection color="#000">
        <FaceBookIcons src={like_image} />
        <FaceBookIcons src={love_image} />
        <FaceBookText>67.5k</FaceBookText>
      </LikeSection>
      <LikeSection color="#918f8f">550 compartilhamentos</LikeSection>

      <CommentContainer>
        {faceBookCommentsMock.map((comment: any) => {
          return (
            <CommentSection key={comment.id}>
              <CommentUserImage src={comment.icon}></CommentUserImage>
              <UserCommentTextWrapper>
                <UserCommentText>{comment.text}</UserCommentText>
              </UserCommentTextWrapper>
            </CommentSection>
          );
        })}
      </CommentContainer>
    </MainFaceBookIContainer>
  );
};
