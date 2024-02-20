import styled from "styled-components";
function ValidationModal({
  message,
  onCancel,
  onConfirm,
  showCancelButton = true,
}) {
  return (
    <ModalBackdropStyle>
      <ModalContentStyle>
        <ModalMessageStyle>{message}</ModalMessageStyle>
        <div>
          {showCancelButton && (
            <CancelClickBtnStyle onClick={onCancel}>취소</CancelClickBtnStyle>
          )}
          <ConfirmClickBtnStyle onClick={onConfirm}>확인</ConfirmClickBtnStyle>
        </div>
      </ModalContentStyle>
    </ModalBackdropStyle>
  );
}

const ModalBackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 콘텐츠 스타일
const ModalContentStyle = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

// 모달 메세지 스타일
const ModalMessageStyle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 5px 10px 10px 10px;
  color: black;
`;
// 모달 취소버튼 스타일
const CancelClickBtnStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px 40px;
  cursor: pointer;
  &:hover {
    background-color: #d8d8d8;
  }
`;
// 모달 확인버튼 스타일
const ConfirmClickBtnStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px 40px;
  margin-left: 10px;
  color: black;
  cursor: pointer;
  &:hover {
    opacity: 80%;
    color: white;
    background-color: teal;
  }
`;
export default ValidationModal;
