import { Box, IconButton, Container, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function Terms() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  if (typeof window !== 'undefined') {
    useEffect(() => {
      const listener1 = (e: any) => {
        var scrollY = window.pageYOffset;
        if (scrollY >= 48) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
      window && window.addEventListener('scroll', listener1);
      return () => {
        window && window.removeEventListener('scroll', listener1);
      };
    }, [window]);
  }
  const handleClickBack = () => {
    router.back();
  };
  return (
    <>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2, backgroundColor: '#ffffff', pt: 'var(--sait)' }}>
        <Container sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleClickBack} sx={{ ml: -2 }}>
            Back
          </IconButton>
          <Typography
            sx={{
              flex: 1,
              fontSize: 16,
              lineHeight: '24px',
              fontWeight: '700',
              color: blueGrey[900],
              '& b': {
                color: blueGrey[300],
              },
              opacity: show ? 1 : 0,
              transition: 'all 0.5s ease',
            }}
          >
            서비스이용약관
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          position: 'relative',
          pt: 'calc(var(--sait) + 56px)',
          pb: 'calc(var(--saib) + 64px + 8px)',
        }}
      >
        <Container sx={{ mt: 1 }}>
          <Typography
            sx={{
              fontSize: 28,
              lineHeight: '36px',
              fontWeight: '700',
              mb: 2,
            }}
          >
            서비스이용약관
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              lineHeight: '20px',
            }}
          >
            <br />
            <b>제 1조 (목적) </b>
            <br />
            ReactBoilerplate 이용약관(이하 “약관”이라 합니다)은 주식회사 ReactBoilerplate(이하 “회사”라 합니다)가 제공하는 <br />
            서비스와 관련하여 회사와 이용 고객(또는 회원) 간에 서비스의 이용 조건 및 절차, 회사와 회원 간의 권리, <br />
            의무 및 책임 사항 기타 필요한 사항을 규정함을 목적으로 합니다. <br />
            <br />
            <b>제 2조 (용어) </b>
            <br />
            본 약관에서 사용하는 용어의 정의는 다음 각 호와 같으며, 정의되지 않은 용어에 대한 해석은 관계법령 및 <br />
            서비스별 안내에서 정하는 바에 따릅니다. <br />
            1. ReactBoilerplate 서비스(이하 “서비스”라 합니다): 이용 고객 또는 회원이 휴대형 단말기, 태블릿PC 등 각종 유무선 <br />
            기기 또는 프로그램을 통하여 이용할 수 있도록 회사가 제공하는 컨텐츠 및 챌린지 서비스, SNS 및 그 외 <br />
            관련된 서비스를 말합니다.
            <br />
            2. 회원: 회사의 서비스에 접속하여 본 약관에 동의하고 ID와 PASSWORD를 발급 받았으며 회사가 <br />
            제공하는 서비스를 이용하는 고객을 포괄적으로 의미합니다.
            <br />
            3. 회원정보: 회사가 가입신청자에게 회원가입 신청양식(이하 “신청양식"이라 합니다)에 기재를 요청하는 <br />
            가입신청자의 개인정보와 회원의 식별과 서비스 이용을 위하여 회원이 입력하고 서비스 내 공개된 <br />
            개인정보를 의미합니다. <br />
            5. ID(고유번호): 회원 식별과 회원의 본 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자와 <br />
            숫자의 조합을 말합니다. 본 서비스에서는 E-mail 주소를 ID로 사용합니다. <br />
            6. PASSWORD(비밀번호): 회원의 정보 보호를 위해 회원 자신이 설정한 문자와 숫자의 조합을 말합니다. <br />
            7. 게시물: 회원이 회사가 제공하는 서비스에 게시 또는 등록하는 부호(URL 포함), 문자, 음성, 음향, 영상
            <br />
            (동영상 포함), 이미지(사진 포함), 파일 등 일체의 정보를 말합니다. <br />
            <br />
            <b>제3조 (약관의 효력 및 변경) </b>
            <br />
            ① 본 약관은 회원이 쉽게 알 수 있도록 서비스 내 또는 연결화면을 통하여 게시하거나 기타의 방법으로 <br />
            회원에게 공지함으로써 효력이 발생합니다. <br />
            ② 회사는 약관의 규제에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 <br />
            위배되지 않는 범위 내에서 본 약관을 개정할 수 있습니다. <br />
            ③ 회사는 약관을 개정할 경우 그 개정이유 및 적용일자를 명시하여 현행 약관과 함께 적용일자 7일전부터 <br />
            적용일 전일까지 제1항의 방법으로 공지합니다. 다만, 회원의 권리 또는 의무에 관한 중요한 규정의 변경은
            <br />
            최소한 30일전에 공지하고 개정약관을 회원이 등록한 E-mail로 발송하여 통지합니다. <br />
            ④ 회사가 제3항에 따라 개정약관을 공지 또는 통지하였음에도 불구하고 회원이 명시적으로 거부의사를 <br />
            표시하지 아니하는 경우 회원이 개정약관에 동의한 것으로 봅니다. <br />
            ⑤ 회원은 변경된 약관에 동의하지 아니하는 경우 서비스의 이용을 중단하고 이용계약을 해지할 수 <br />
            있습니다. <br />
            ⑥ 본 약관에 동의하는 것은 서비스를 정기적으로 방문하여 약관의 변경사항을 확인하는 것에 동의함을 <br />
            의미합니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원의 피해에 대하여 회사는 책임을 지지 <br />
            않습니다. <br />
            <br />
            <b>제4조 (약관 외 준칙) </b>
            <br />
            본 약관에 명시되지 않은 사항에 대해서는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 약관의 규제에 <br />
            관한 법률, 전기통신사업법 등 관계법령 및 회사가 정한 서비스의 세부이용지침 등의 규정에 따릅니다. <br />
            <br />
            <b>제5조 (이용계약의 성립) </b>
            <br />
            ① 서비스 이용계약은 회사가 정한 가입 양식에 따라 회원정보(전자우편주소, 비밀번호, 별명 등)를 <br />
            기입하여 회원가입신청을 하고 회사가 이러한 신청에 대하여 승인함으로써 체결됩니다. <br />
            ② 브랜드 전환의 경우에는 서비스나 제품을 판매하는 직종에 종사하는 회원이 회사가 정한 절차에 따라 <br />
            정보를 기입하여 브랜드 전환 신청을 하고 회사가 해당 브랜드 전환 신청을 승인하면 브랜드로서 서비스를 <br />
            이용할 수 있습니다. <br />
            ③ 가입신청자가 회원정보를 제출하는 것은 회원가입 화면에 노출되어 있는 본 약관 및 개인정보처리방침의 <br />
            내용을 숙지하고, 회사가 서비스 이용을 위해 운영하는 각종 정책(저작권 정책, 운영 방침 등)과 수시로 <br />
            공지하는 사항을 준수하는 것에 대해 동의하는 것으로 봅니다. <br />
            <br />
            <b>제6조 (이용신청에 대한 승낙 및 제한) </b>
            <br />
            ① 회사는 서비스의 이용을 신청한 가입신청자에 대하여 업무상ᆞ기술상 지장이 없는 한 접수순서에 따라 <br />
            서비스의 이용을 승낙합니다. <br />
            ② 타인의 개인정보를 도용하는 등 부정한 목적 또는 방법으로 이용신청을 한 회원의 ID는 사전 통지 없이 <br />
            이용 계약이 해지될 수 있으며, 당해 회원은 관계법령에 따라 처벌을 받을 수 있습니다. <br />
            ③ 회사는 다음 각 호에 해당하는 이용신청에 대하여는 승낙을 하지 않을 수 있습니다. <br />
            1. 기술상 서비스 제공이 불가능한 경우 <br />
            2. 신청양식의 기재사항을 누락하거나 오기하여 신청하는 경우 <br />
            3. 사회의 안녕질서 또는 미풍양속을 저해하거나 저해할 목적으로 신청한 경우 <br />
            4. 회원의 귀책사유에 의하여 회원자격을 상실한 적이 있는 경우. 다만, 자격상실 이후 6개월 이상 경과한 <br />
            자로 회사의 회원 재가입 승낙을 받은 경우는 예외로 합니다. <br />
            5. 기타 회사가 정한 이용요건에 충족되지 않았을 경우 <br />
            ④ 회사는 서비스를 이용하는 회원에 대하여 회원의 종류별로 구분하여 서비스 이용에 차등을 둘 수 <br />
            있습니다. <br />
            <br />
            <b>제7조 (회원정보의 변경) </b>
            <br />
            ① 회원은 서비스를 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. <br />
            ② 회원정보를 수정하지 않음으로 인하여 발생하는 모든 책임은 회원에게 있습니다. <br />
            <br />
            <b>제 8조 (서비스)</b>
            <br />
            회사가 제공하는 서비스는 다음과 같습니다.
            <br />
            1. 인터넷을 통하여 각종 컨텐츠를 제공하는 서비스
            <br />
            2. 인터넷 상에서 검색, 커뮤니티 등을 기반으로 각종 정보를 제공하는 포털 서비스
            <br />
            3. 인터넷 정보검색서비스, 검색운영서비스 및 운영서비스의 대행
            <br />
            4. 인터넷을 통한 상품의 중개, 거래 및 금융거래를 영위하는 사업
            <br />
            5. 인터넷 과금 및 결제대행서비스
            <br />
            6. 데이터 베이스 서비스
            <br />
            7. 기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스
            <br />
            <br />
            <b>제9조 (서비스의 이용) </b>
            <br />
            ① 회사는 회원의 이용신청을 승낙한 때부터 서비스를 개시합니다. <br />
            ② 회사의 업무상ᆞ기술상의 장애로 인하여 서비스를 개시하지 못하는 경우에는 서비스에 공지하거나 <br />
            회원에게 이를 통지합니다. <br />
            ③ 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 회사의 업무상ᆞ기술상 또는 서비스 <br />
            운영정책상 서비스가 일시 중지될 수 있습니다. 이러한 경우 회사는 사전 또는 사후에 이를 공지합니다. <br />
            ④ 회사는 서비스를 일정범위로 분할하여 각 범위 별로 이용 가능한 시간을 별도로 정할 수 있으며 이 경우 <br />
            그 내용을 공지합니다. <br />
            ⑤ 회사는 서비스 내의 개별서비스에 대한 별도의 약관을 둘 수 있으며, 개별서비스에서 별도로 적용되는 <br />
            약관에 대한 동의는 회원이 개별서비스를 최초로 이용할 경우 별도의 동의절차를 거치게 됩니다. <br />
            <br />
            <b>제10조 (서비스의 변경 및 중지)</b>
            <br />
            ① 회사는 서비스(개별서비스 포함)를 변경하여야 하는 상당한 이유가 있는 경우 변경될 서비스의 내용 및 <br />
            제공일자를 제15조에서 정한 방법으로 회원에게 통지하고 서비스를 변경하여 제공할 수 있습니다. <br />
            ② 회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다. <br />
            1. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우 <br />
            2. 회원이 회사의 영업활동을 방해하는 경우 <br />
            3. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우 <br />
            4. 제휴업체(BP)와의 계약종료 등과 같은 회사의 제반 사정으로 서비스를 유지할 수 없는 경우 <br />
            5. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우 <br />
            <br />
            <b>제11조 (정보의 제공 및 광고의 게재) </b>
            <br />
            ① 회사는 서비스를 운영함에 있어 각종 정보를 서비스 화면에 게재하거나 E-mail, 서신우편, SMS(MMS)
            <br />
            등으로 회원에게 제공할 수 있습니다.
            <br />
            ② 회사는 서비스를 운영함에 있어 회사 또는 제휴사의 서비스 관련 각종 광고를 서비스 화면 또는 게시물과 <br />
            결합하여 게재하거나 회원의 동의를 얻어 E-mail 및 서신 우편, SMS(MMS) 등의 방법으로 회원에게 <br />
            제공할 수 있습니다. <br />
            ③ 회원이 서비스상에 게재되어 있는 광고를 이용하거나 서비스를 통한 광고주의 판촉활동에 참여하는 등의 <br />
            방법으로 교신 또는 거래를 하는 것은 전적으로 회원과 광고주간의 문제입니다. 만약, 회원과 광고주간에 <br />
            문제가 발생할 경우에도 회원과 광고주가 직접 해결하여야 하며, 이와 관련하여 회사는 어떠한 책임도 지지 <br />
            않습니다. <br />
            ④ 회사는 다음 각호에 해당하는 경우 회원의 동의여부와 상관없이 전자우편으로 발송할 수 있습니다. <br />
            1. 이용 신청에서 입력한 전자우편 주소의 소유를 확인하기 위해서 인증메일을 발송하는 경우 <br />
            2. 회원의 정보가 변경되어 확인하기 위해서 인증메일을 발송하는 경우 <br />
            3. 기타 서비스를 제공함에 있어 회원이 반드시 알아야 하는 중대한 정보라고 회사가 판단하는 경우 <br />
            <br />
            <b>제12조 (휴대폰 및 기타 기기) </b>
            <br />
            ① 회사는 모바일서비스를 무료로 제공합니다. 다만 통신에 따른 요금은 이동통신사의 정책에 따릅니다. <br />
            통신에 따른 요금에 대해서는 회사는 책임지지 않습니다.
            <br />
            ② 회원은 자신의 기기에서 회사가 요구하는 모든 정보와 동기화(앱을 통한 동기화 포함)하는데 필요한 모든 <br />
            권리를 제공하는데 있어 동의한 것으로 간주합니다.
            <br />
            <br />
            <b>제13조 (게시물에 대한 책임)</b>
            <br />
            ① 회사는 회원이 게시하거나 전달하는 서비스 내의 게시물이 다음 각 호의 경우에 해당한다고 판단되는 <br />
            경우 사전 통지 없이 삭제할 수 있으며, 이에 대해 회사는 어떠한 책임도 지지 않습니다. <br />
            1. 회사, 다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우 <br />
            2. 공공질서 및 미풍양속에 위반되는 내용의 게시물에 해당하는 경우 <br />
            3. 범죄 행위에 결부된다고 인정되는 내용인 경우 <br />
            4. 회사 또는 제3자의 저작권, 기타 타인의 권리를 침해하는 내용인 경우 <br />
            5. 회사가 정한 개별 서비스 별 세부이용지침에 반하는 내용인 경우 <br />
            6. 회사에서 제공하는 서비스와 관련 없는 내용인 경우 <br />
            7. 불필요하거나 승인되지 않은 광고, 판촉물을 게재하는 경우 <br />
            8. 타인의 명의 등을 무단으로 도용하여 작성한 내용이거나, 타인이 입력한 정보를 무단으로 위ᆞ변조한 <br />
            내용인 경우 <br />
            9. 동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에 어긋나는 경우 <br />
            10. 게시물의 정보를 외부 서비스에서 사용하는 행위를 금지하는 사이트에서 URL 정보를 수집하여 <br />
            게재하는 경우 <br />
            11. 기타 관계 법령 및 회사의 개별 서비스 별 세부이용지침 등에 위반된다고 판단되는 경우 <br />
            ② 회사는 개별 서비스 별로 게시물과 관련된 세부이용지침을 별도로 정하여 시행할 수 있으며, 회원은 그 <br />
            지침에 따라 게시물(회원간 전달 포함)을 게재하여야 합니다. <br />
            <br />
            <b>제14조 (게시물의 저작권 등) </b>
            <br />
            ① 회원이 서비스 내에 게시한 게시물의 저작권은 저작권법에 의해 보호를 받으며, 회사가 작성한 저작물에 <br />
            대한 저작권 및 기타 지적재산권은 회사에 귀속합니다. <br />
            ② 회원은 게시한 게시물의 저작권 및 기타 산업재산권을 갖고 있음을 명확히 합니다. 다만 회원은 본 <br />
            서비스에 게시물을 게시함으로써 회사가 서비스 및 사업과 관련하여 해당 게시물(및 그 2차적 저작물)의 <br />
            일부 또는 전부를 전세계적으로 비독점적으로 무상으로 사용할 권리(이용, 공개, 반포, 광고, 출판, 복제, <br />
            공연, 공중송신, 전시, 배포, 대여, 2차저작물작성)를 허락하며 이를 양도 할 수 있음에 동의한 것으로 <br />
            간주합니다. 또한 회사에 대해 저작인격권을 행사 하지 않을 것에 동의한 것으로 간주합니다. 이는 서비스가 <br />
            무료로 이용되고 있는 이유입니다.
            <br />
            ③ 전 항의 규정에도 불구하고, 회사가 게시물을 전 항에 기재된 목적 이외에 제3자에게 게시물을 제공하고 <br />
            금전적 대가를 지급받는 경우에는 사전에 전화, E-mail 등의 방법으로 회원의 동의를 얻습니다. <br />
            ④ 회원이 서비스에 게시물을 게재하는 것은 다른 회원이 게시물을 서비스 내에서 사용하거나, 회사가 <br />
            검색결과로 사용하는 것을 허락한 것으로 봅니다. 그리고 스마트폰, 태블릿 PC의 서비스 이용자(앱 또는 <br />
            브라우저로 서비스를 비가입 방문한 경우도 포함)가 소프트웨어(예:앱, 브라우저) 또는 하드웨어(예: <br />
            스마트폰, 태블릿PC)에서 제공하는 기능을 이용하여 게시물을 저장한 후 활용하는 것을 허락한 것으로 <br />
            봅니다. <br />
            ⑤ 제18조에 의해 이용계약이 해지되는 경우 회원이 서비스에 게시한 게시물은 삭제됩니다. 다만, 다른 <br />
            회원 또는 제3자에게 의하여 스크랩, 공유 등의 기능을 통해 다시 게시된 게시물 및 댓글 등 다른 회원의 <br />
            정상적인 서비스 이용에 필요한 게시물은 삭제되지 않습니다. <br />
            ⑥ 회사는 서비스 운영정책상 또는 회사가 운영하는 사이트간의 통합 등을 하는 경우 게시물의 내용을 <br />
            변경하지 아니하고 게시물의 게재 위치를 변경ᆞ이전하거나 사이트간 공유로 하여 서비스할 수 있습니다. <br />
            다만, 게시물의 이전ᆞ변경 또는 공유를 하는 경우에는 사전에 공지합니다. <br />
            <br />
            <b>제15조 (회사의 의무) </b>
            <br />
            ① 회사는 서비스 제공과 관련하여 알고 있는 회원의 회원정보를 본인의 동의 없이 제3자에게 제공하지 <br />
            않습니다. <br />
            ② 회사는 회원의 회원정보를 보호하기 위해 보안시스템을 구축 운영하며, "개인정보처리방침"을 공지하고 <br />
            준수합니다. 또한, 회사는 "개인정보처리방침"에 따라 회원정보를 처리함에 있어 안정성 확보에 필요한 <br />
            기술적 및 관리적 대책을 수립ᆞ운영합니다. <br />
            ③ 회사는 서비스와 관련한 회원의 불만사항이 접수되는 경우 이를 신속하게 처리하여야 하며, 신속한 <br />
            처리가 곤란한 경우 그 사유와 처리 일정을 서비스 화면에 게재하거나 E-mail 등을 통하여 회원에게 <br />
            통지합니다. <br />
            ④ 회사가 제공하는 서비스로 인하여 회원에게 손해가 발생한 경우 그러한 손해가 회사의 고의나 중과실에 <br />
            의해 발생한 경우에 한하여 회사에서 책임을 부담하며, 그 책임의 범위는 통상손해에 한합니다. <br />
            <br />
            <b>제16조 (회원의 의무) </b>
            <br />
            ① 회원은 관계법령, 약관, 서비스 이용안내 및 서비스상에 공지한 주의사항, 회사가 서비스 이용과 관련하여
            <br />
            회원에게 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 아니 됩니다. <br />
            ② 회원은 회사에서 공식적으로 인정한 경우를 제외하고는 서비스를 이용하여 상품을 판매하는 영업 활동을 <br />
            할 수 없으며, 특히 해킹, 광고를 통한 수익, 음란사이트를 통한 상업행위, 상용소프트웨어 불법배포 등을 할 <br />
            수 없습니다. 이를 위반하여 발생한 영업 활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 <br />
            관해서는 회사가 책임을 지지 않으며, 회원은 이와 같은 행위와 관련하여 회사에 대하여 손해배상 의무를 <br />
            집니다. <br />
            ③ 회원은 서비스의 이용권한, 기타 서비스 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며 이를 <br />
            담보로 제공할 수 없습니다. <br />
            <br />
            <b>제17조 (회원에 대한 통지) </b>
            <br />
            ① 회사는 회원의 서비스 이용에 필요한 권리 및 의무 등에 관한 사항을 회원이 지정한 E-mail, SMS 등으로
            <br />
            통지할 수 있습니다. <br />
            ② 회사는 불특정 다수 회원에 대한 통지의 경우 서비스에 게시함으로써 개별 통지에 갈음할 수 있습니다. <br />
            <br />
            <b>제18조 (ID와 PASSWORD 관리에 대한 의무와 책임)</b>
            <br />
            ① 회원은 자신의 ID와 PASSWORD 관리를 철저히 하여야 합니다. ID와 PASSWORD의 관리 소홀, <br />
            부정 사용에 의하여 발생하는 모든 결과에 대한 책임은 회원 본인에게 있습니다. <br />
            ② 회사"는 회원 ID의 유출 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나 회사 및 회사의 운영자로 <br />
            오인할 우려가 있는 경우, 해당 ID의 이용을 제한할 수 있습니다. <br />
            ③ 회원은 본인의 ID 및 PASSWORD를 타인에게 이용하게 해서는 안되며, 회원 본인의 ID 및 <br />
            PASSWORD를 도난 당하거나 타인이 사용하고 있음을 인지하는 경우에는 바로 회사에 통보하고 회사의 <br />
            안내가 있는 경우 그에 따라야 합니다. <br />
            <br />
            <b>제19조 (회원정보의 보호 및 이용) </b>
            <br />
            ① 회사는 적법하고 공정한 수단에 의하여 이용계약의 성립 및 이행에 필요한 최소한의 범위 내에서 <br />
            개인정보처리방침에 따라 회원의 회원정보를 수집합니다. <br />
            ② 회사의 개인정보처리방침은 회사에 연동된 다른 서비스(회사가 운영하지 않는 서비스를 말합니다. 이하 <br />
            같습니다)에는 적용되지 않습니다. <br />
            ③ 회사는 통신비밀보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 <br />
            행정기관이나 수사기관 등에서 회원의 회원정보의 열람이나 제출을 요청하는 경우에는 이를 제공할 수 <br />
            있습니다. <br />
            ④ 회사는 회원의 귀책사유로 인해 노출된 회원정보에 대해서 일체의 책임을 부담하지 않습니다. <br />
            ⑤ 회사는 회원정보의 처리 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나, 필요한 경우 이러한 업무의
            <br />
            일부 또는 전부를 회사가 선정한 회사에 위탁할 수 있으며, 회원정보의 처리 및 관리 등에 관한 업무를 <br />
            위탁하는 경우에는 개인정보처리방침을 통하여 공지합니다. <br />
            ⑥ 회원이 이용계약 체결과정에서 회사에 제공한 회원정보에 대한 이용 또는 제공에 대한 동의를 철회하고자
            <br />
            하는 경우에는 개인정보처리방침에서 정한 바에 따르며, 회원이 이러한 동의를 철회하는 경우 서비스 <br />
            이용계약은 자동으로 해지됩니다. <br />
            <br />
            <b>제20조 (계약해지 및 이용제한) </b>
            <br />
            ① 회원이 서비스 이용계약을 해지하고자 할 경우에는 서비스를 제공하는 홈페이지 또는 어플리케이션에서 <br />
            해지 신청을 하여야 합니다. 홈페이지나 어플리케이션을 통해 계약 해지가 불가능한 경우에는 회원이 회사가
            <br />
            제공하는 서비스 페이지 또는 전자우편 등의 방법으로 회사에 중지신청을 할 수 있습니다. 회사는 이와 같은 <br />
            요청을 받았을 경우, 회사가 별도로 고지한 방법에 따라 신속하게 처리합니다.
            <br />
            ② 회원이 이용계약을 해지하는 경우 회원 자신의 개인페이지에 있는 게시물만 삭제됩니다. <br />
            ③ 회사는 회원이 본 약관 및 개별서비스 이용약관을 위반한 경우 및 서비스의 정상적인 운영을 방해한 <br />
            경우에는 경고, 일시적 이용정지, 영구적 이용정지 등의 단계로 서비스 이용을 제한하거나 이용계약을 <br />
            해지할 수 있습니다. <br />
            ④ 회원은 본 조 제 3항에 따른 서비스 이용정지 기타 서비스 이용과 관련된 이용제한에 대해 관리자에게 E-
            <br />
            mail을 통해 이의신청을 할 수 있으며, 회사는 회원의 이의신청이 정당하다고 판단되는 경우 즉시 서비스 <br />
            이용을 재개합니다. <br />
            ⑤ 회사는 회원이 계속해서 3개월 이상 로그인하지 않는 경우, 회원정보의 보호 및 운영의 효율성을 위해 <br />
            이용을 제한할 수 있습니다. <br />
            <br />
            <b>제 21조 (구매신청) </b>
            <br />
            ① 회원은 본 약관 및 회사가 정한 규정에 따라 아래와 같거나 유사한 방법으로 구매를 신청하며, 회사는 <br />
            이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다. <br />
            1. 재화 등의 검색 및 선택 <br />
            2. 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력 <br />
            3. 약관내용, 청약 철회권이 제한되는 서비스, 배송료/설치비 등의 비용부담과 관련한 내용에 대한 확인 <br />
            4. 재화 등의 구매신청 및 이에 관한 확인 또는 회사의 확인에 대한 동의 <br />
            5. 결제방법의 선택 <br />
            <br />
            <b>제 22조 (구매계약의 성립) </b>
            <br />
            ① 회사는 제 19조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만, <br />
            미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 <br />
            계약을 취소할 수 있다는 내용을 고지하여야 합니다. <br />
            1. 신청 내용에 허위, 기재누락, 오기가 있는 경우 <br />
            2. 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 <br />
            3. 기타 구매신청에 승낙하는 것이 회사의 기술상 현저히 지장이 있다고 판단하는 경우 <br />
            ② 회사의 승낙이 제22조 제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 <br />
            봅니다. <br />
            ③ 회사의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 <br />
            등에 관한 정보 등을 포함하여야 합니다. <br />
            <br />
            <b>제 23조 (지급방법) </b>
            <br />
            ① 회사에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법 중 가용한 방법으로 할 수 <br />
            있습니다. 단 회사는 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 <br />
            징수할 수 없습니다. <br />
            1. 폰뱅킹, 인터넷뱅킹 등의 각종 계좌이체 <br />
            2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제 <br />
            3. 온라인 가상계좌 입금 <br />
            4. 할인쿠폰 등 회사가 지급한 쿠폰에 의한 결제 <br />
            5. 기타 회사가 추가 지정하는 결제 수단 <br />
            ② 회사는 회원의 대금지급에 법적, 기술적 문제가 발생하거나 회사가 예견하지 못한 장애(은행 통신망 장애 <br />
            등)가 발생하는 경우 회사의 정책에 따라 회원에게 결제 수단의 변경을 요청하거나 잠정 결제보류 내지 <br />
            거부할 수 있습니다. <br />
            ③ 구매대금의 결제와 관련하여 회원이 입력한 정보 및 그와 관련된 책임은 회원에게 있으며, 재화 또는 <br />
            용역의 청약 이후 합리적인 일정 기간 내 결제가 이루어 지지 않는 경우 회사는 해당주문을 취소할 수 <br />
            있습니다. <br />
            ④ 회사는 구매자의 결제수단에 대하여 정당한 사용권한 보유여부를 확인할 수 있으며 필요한 경우 해당 <br />
            거래진행의 보류 및 소명자료의 제출을 요청할 수 있습니다. <br />
            <br />
            <b>제 24조 (수신확인통지, 구매신청 변경 및 취소) </b>
            <br />
            ① 회사는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다. <br />
            ② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 <br />
            구매신청 변경 및 취소를 할 수 있고 회사는 배송 전에 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 <br />
            따라 처리하여야 합니다. 다만 이미 대금을 지불한 경우에는 제 25조의 청약철회 등에 관한 규정에 <br />
            따릅니다. <br />
            <br />
            <b>제 25조 (재화 등의 공급) </b>
            <br />
            ① 회사는 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7 일<br />
            이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만 회사가 이미 <br />
            재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3 영업일 이내에 <br />
            조치를 취합니다. 이 때 회사는 이용자가 재화 등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 <br />
            조치를 합니다. <br />
            ② 공휴일 및 기타 휴무일 또는 천재지변 등의 불가항력적인 사유가 발생하는 경우 그 해당기간은 <br />
            배송소요기간에서 제외합니다. <br />
            <br />
            <b>제 26조 (환급) </b>
            <br />
            ① 회사는 이용자가 구매 신청한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 <br />
            그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3 영업일 <br />
            이내에 환급하거나 환급에 필요한 조치를 취합니다. <br />
            <br />
            <b>제 27조 (청약철회 등) </b>
            <br />
            ① 회사와 재화 등의 구매에 관한 계약을 체결한 이용자는 수신확인의 통지를 받은 날로부터 7일 이내에는 <br />
            청약의 철회를 할 수 있습니다. 다만, 통지를 받은 때보다 공급이 늦게 이루어진 경우에는 재화 등의 공급을 <br />
            받은 날로부터 7일 이내에 청약 철회를 할 수 있습니다. <br />
            ② 이용자는 재화 등을 배송 받은 경우 다음 각 호의 어느 하나에 해당하는 경우에는 반품 및 교환을 할 수 <br />
            없습니다. <br />
            1. 이용자에게 책임이 있는 사유로 재화 등이 멸실 또는 훼손된 경우. 다만 재화 등의 내용 확인을 위하여 <br />
            포장 등을 훼손한 경우는 제외합니다. <br />
            2. 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우 <br />
            3. 시간의 경과에 의하여 재판매가 불가능할 정도로 재화 등의 가치가 현저히 감소한 경우 <br />
            4. 같은 성능을 지닌 상품으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우 <br />
            5. 그 밖의 거래의 안전을 위하여 대통령령이 정하는 경우 <br />
            ③ 제 2항 제 2호 내지 제 4호의 경우 회사가 사전에 청약철회 등이 제한되는 사실을 이용자가 쉽게 알 수 <br />
            있는 곳에 명시하거나 사용 상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지 <br />
            않습니다. <br />
            ④ 이용자는 제 1항 및 제 2항의 규정에도 불구하고 재화 등의 내용이 표시, 광고 내용과 다르거나 <br />
            계약내용과 다르게 이행된 경우에는 당해 재화 등을 공급받은 날로부터 3 개월 이내, 그 사실을 안 날 또는 <br />
            알 수 있었던 날부터 30 일 이내에 청약철회를 할 수 있습니다. <br />
            <br />
            <b>제 28조 (청약철회 등의 효과) </b>
            <br />
            ① 회사는 이용자로부터 재화 등을 반환 받은 경우 3 영업일 이내에 이미 지급받은 재화 등의 대금을 <br />
            환급합니다. 이 경우 회사가 이용자에게 재화 등의 환급을 지연한 때에는 그 지연기간에 대하여 <br />
            공정거래위원회가 정하여 고시하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다. <br />
            ② 회사는 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 <br />
            대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 <br />
            또는 취소하도록 요청합니다. <br />
            ③ 청약철회 등의 경우 공급받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다. 회사는 이용자에게 <br />
            청약철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만 재화 등의 내용이 표시, 광고의 <br />
            내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 하는 경우 재화 등의 반환에 필요한 비용은 <br />
            회사가 부담합니다. <br />
            ④ 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 회사는 청약철회 시 그 비용을 누가 <br />
            부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다. <br />
            <br />
            <b>제 29조 (상품쿠폰) </b>
            <br />
            ① 회사는 재화 등을 구매하는 이용자에게 지정된 상품 구매 시 일정액 또는 일정비율을 할인 받을 수 있는 <br />
            쿠폰을 발급할 수 있습니다. <br />
            ② 회사에서 별도로 명시한 경우를 제외하고는 타인에게 양도할 수 없으며, 어떠한 경우에도 이를 타인에게 <br />
            실질적으로 매매할 수 없습니다. <br />
            ③ 상품쿠폰은 현금으로 출금될 수 없으며, 표시된 유효기간이 만료되거나 이용계약이 종료되면 소멸합니다.
            <br />
            ④ 상품쿠폰은 일부 품목이나 금액에 따라 사용이 제한될 수 있으며, 회원을 탈퇴한 경우 상품쿠폰은 <br />
            소멸됩니다. <br />
            <br />
            <b>제 30조 (포인트) </b>
            <br />
            ① 포인트는 회사가 운영하는 전자화폐로써 재화 등을 구매할 때 1P(포인트)=현금 1원의 등가로 결제 수단
            <br />
            사용이 가능합니다. <br />
            ② 포인트는 회사의 정책, 이벤트 등을 통해 회사가 정한 절차와 방법에 따라 적립됩니다. <br />
            ③ 포인트의 유효기간은 적립일로부터 1년이며 유효기간이 지나면 자동적으로 소멸됩니다. 단 청약철회 <br />
            등으로 환급되는 포인트의 경우 최초 적립일을 기준으로 유효기간이 적용됩니다. (다만, 회사가 별도로 <br />
            유효기간을 정한 때에는 이에 따릅니다.) <br />
            ④ 포인트는 유효기간의 도래가 빠른 순서로 사용되며, 유효기간이 만료되거나 이용계약이 종료되면 미사용 <br />
            포인트는 소멸됩니다. <br />
            ⑤ 포인트는 회사가 회원에게 무상지급하는 혜택으로 현금 출금할 수 없으며 회사에서 정한 기한 및 <br />
            이용방법에 따라서만 사용 가능합니다. 이 때 일부 품목이나 금액에 따라 사용이 제한될 수 있습니다. <br />
            ⑥ 부정한 방법으로 포인트를 획득한 사실이 확인될 경우 회사는 회원의 포인트 회수, ID(고유번호) 삭제 및 <br />
            형사 고발 등 기타 조치를 취할 수 있습니다. <br />
            ⑦ 포인트는 회사에서 별도로 명시한 경우를 제외하고는 타인에게 양도할 수 없으며 부정한 목적이나 <br />
            용도로의 사용을 금지합니다. 위반 시에 회사는 포인트를 소멸시키거나 회원자격을 정지할 수 있습니다. <br />
            ⑧ 1년간 거래가 없고 적립된 포인트가 5,000P 미만일 경우에는 휴면회원으로 간주하여 회사는 해당 <br />
            회원의 적립된 포인트를 회수합니다. <br />
            ⑧ 회원은 탈퇴한 경우 적립된 포인트는 소멸됩니다. <br />
            <br />
            <b>제 31조 (손해배상) </b>
            <br />
            ① 회원이 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 본 약관을 위반한 회원은
            <br />
            회사에 발생하는 모든 손해를 배상하여야 합니다. <br />
            ② 회원이 서비스를 이용하는 과정에서 행한 불법행위나 본 약관 위반행위로 인하여 회사가 당해 회원 <br />
            이외의 제3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 회원은 자신의 <br />
            책임과 비용으로 회사를 면책 시켜야 하며, 회사가 면책되지 못한 경우 당해 회원은 그로 인하여 회사에 <br />
            발생한 모든 손해를 배상하여야 합니다. <br />
            <br />
            <b>제 32조 (면책사항) </b>
            <br />
            ① 회사는 천재지변, 디도스(DDOS)공격, IDC장애, 기간통신사업자의 회선 장애 또는 이에 준하는 <br />
            불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면책됩니다. <br />
            ② 회사는 회원의 귀책사유로 인한 서비스의 이용장애에 대하여 책임을 지지 않습니다. <br />
            ③ 회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그 밖에 <br />
            서비스를 통하여 얻은 자료로 인한 손해 등에 대하여도 책임을 지지 않습니다. 회사는 회원이 사이트에 <br />
            게재한 게시물의 정확성 등 내용에 대하여는 책임을 지지 않습니다. <br />
            ④ 회사는 회원 상호간 또는 회원과 제3자 상호간에 서비스를 매개로 발생한 분쟁에 대해서는 개입할 <br />
            의무가 없으며 이로 인한 손해를 배상할 책임도 없습니다. <br />
            ⑤ 회원이 자신의 개인정보를 타인에게 유출 또는 제공함으로써, 발생하는 피해에 대해서 회사는 일절 <br />
            책임을 지지 않습니다. <br />
            ⑥ 게시물 또는 댓글 등을 통해 표현하거나 드러나는 회원의 견해와 회사의 견해는 무관하며, 회사는 회원이 <br />
            제공하는 게시물 또는 댓글 등에 대하여 어떠한 책임도 부담하지 아니합니다. <br />
            ⑦ 본 서비스 화면에서 링크, 배너 등을 통하여 연결된 회사(이하 피연결회사)와 회원간에 이루어진 거래에 <br />
            회사는 개입하지 않으며, 해당 거래에 대하여 책임을 지지 않습니다. <br />
            ⑧ 회사는 회원의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인 또는 검토하여야 <br />
            할 의무가 없으며, 그 결과에 대한 책임을 지지 않습니다. <br />
            ⑨ 회사는 회원의 컴퓨터 환경이나 회사의 관리 범위에 있지 아니한 보안 문제로 인하여 발생하는 제반 문제 <br />
            또는 현재의 보안기술 수준으로 방어가 곤란한 네트워크 해킹 등 회사의 귀책사유 없이 발생하는 문제에 <br />
            대해서 책임을 지지 않습니다. <br />
            <br />
            <b>제 33조 (분쟁 조정 및 관할법원) </b>
            <br />
            ① 서비스 이용과 관련하여 회사와 회원 사이에 분쟁이 발생한 경우, 회사와 회원은 분쟁의 해결을 위해 <br />
            성실히 협의합니다. <br />
            ② 본 조 제1항의 협의에서도 분쟁이 해결되지 않을 경우 양 당사자는 민사소송법상의 관할법원에 소를 <br />
            제기할 수 있습니다. <br />
            ③ 회사와 이용자간에 제기된 소송에는 대한민국 법을 적용합니다. <br />
            ④ 본 약관은 한글로 작성되었습니다. 본 약관의 번역본이 한글 원문과 차이가 있을 경우 한글 원문이 <br />
            우선합니다. <br />
            ⑤ 본 조 제1항의 협의에서도 분쟁이 해결되지 않아 소송이 제기되는 경우에는 “회사”의 본사 소재지를 <br />
            관할하는 법원을 전속 관할법원으로 합니다. <br />
            부칙 (시행일) 본 약관은 2021년 4월 1일부터 시행합니다. 종전 약관은 본 약관으로 대체됩니다. 개정된 <br />
            이용약관의 적용일자 이전 가입자 또한 개정된 이용약관의 적용을 받습니다. <br />
          </Typography>
        </Container>
      </Box>
    </>
  );
}