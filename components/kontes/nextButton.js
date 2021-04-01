import { Button } from '@chakra-ui/button';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useRouter } from 'next/router';

export default function NextButton() {
  const router = useRouter();
  const { kontesId, questionNumber } = router.query;

  const clickHandler = (e) => {
    e.preventDefault();
    router.push(`/kontes/${kontesId}/${Number(questionNumber) + 1}`);
  };

  return (
    <Button variant="outline" colorScheme="teal" rightIcon={<HiArrowNarrowRight />} onClick={clickHandler}>
      Selanjutnya
    </Button>
  );
}
