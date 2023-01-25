import styled from "styled-components";
import { ImagePropType } from "../../types";

export const MainFaceBookIContainer = styled.div`
  width: 90%;
  height: fit-content;
  background-color: #fff;
  border-radius: 20px;
  padding-bottom: 20px;

  @media (min-width: 650px) {
    width: 650px;
  }
`;

export const LikeSection = styled.div<{
  color: string;
}>`
  width: calc(100% - 13px);
  height: 32px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: flex;
  justify-content: left;
  align-items: center;

  border-bottom: 1px solid #ccc;
  padding-left: 13px;
  color: ${({ color }) => color};
`;

export const FaceBookIcons = styled.img<ImagePropType>`
  width: 18px;
  height: 18px;
  object-fit: cover;
`;

export const FaceBookText = styled.p`
  font-weight: 500;
  padding-left: 5px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0 10px;

  overflow: auto;
`;

export const CommentSection = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  margin-top: 10px;
`;

export const CommentUserImage = styled.img<ImagePropType>`
  width: 45px;
  height: 45px;
  object-fit: cover;

  border-radius: 50%;
`;

export const UserCommentTextWrapper = styled.div`
  width: calc(90% - 45px);
  height: fit-content;
  background-color: #f1f3f5;
  border-radius: 20px;
  margin-left: 5px;
`;

export const UserCommentText = styled.p`
  text-align: left;
  font-weight: 400;
  color: #333;
  font-size: 0.8em;
  margin-left: 10px;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
