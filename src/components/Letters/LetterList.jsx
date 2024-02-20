import styled from "styled-components";
import Letter from "./Letter";
import { useSelector } from "react-redux";
const LetterList = () => {
  const chooseMember = useSelector((state) => state.member);
  const { posts } = useSelector((state) => state.data);

  const filteredLetter = posts.filter((letter) => {
    return letter.writedTo === chooseMember;
  });

  return (
    <LetterListWrapper>
      {filteredLetter.length > 0 ? (
        filteredLetter.map((Fandata) => (
          <Letter key={Fandata.id} Fandata={Fandata}></Letter>
        ))
      ) : (
        <p>
          {chooseMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬 레터의
          주인공이 되어주세요!
        </p>
      )}
    </LetterListWrapper>
  );
};
const LetterListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  margin-top: 20px;
  width: 40%;
  color: white;
  border-radius: 5px;
  padding: 20px;
`;
export default LetterList;
