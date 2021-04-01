import { Button } from '@chakra-ui/button';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/router';

export default function PrevButton() {
  const router = useRouter();
  const { kontesId, questionNumber } = router.query;

  const clickHandler = (e) => {
    e.preventDefault();
    router.push(`/kontes/${kontesId}/${Number(questionNumber) - 1}`);
  };

  return (
    <Button variant="outline" colorScheme="teal" leftIcon={<HiArrowNarrowLeft />} onClick={clickHandler}>
      Sebelumnya
    </Button>
  );
}
