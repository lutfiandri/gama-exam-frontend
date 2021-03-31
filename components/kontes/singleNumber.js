import { Button } from '@chakra-ui/button';
import { useRouter } from 'next/router';

export default function SingleNumber(props) {
  const router = useRouter();
  const { kontesId } = router.query;

  let overrides = {};
  if (props.answered) {
    overrides = {
      bg: 'teal.900',
      colorScheme: 'teal',
    };
  }

  const clickHandler = (e) => {
    e.preventDefault();
    router.push(`/kontes/${kontesId}/${props.children}`);
  };

  return (
    <Button {...props} {...overrides} margin="0.25rem" onClick={clickHandler}>
      {props.children}
    </Button>
  );
}
