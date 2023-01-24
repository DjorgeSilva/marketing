import styled from "styled-components";
import { ImagePropType } from "../../types";

export const MainFaceBookIContainer = styled.div`
  width: 90%;
  height: 400px;
  background-color: red;
`;

export const LikeSection = styled.div`
  width: 100%;
  height: 32px;
  background-color: #fff;

  display: flex;
  justify-content: left;
  align-items: center;

  border-bottom: 1px solid #ccc;
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

export const CommentSection = styled.div`
  width: 100%;
  height: fit-content;
`;
