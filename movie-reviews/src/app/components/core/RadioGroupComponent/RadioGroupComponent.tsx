import { FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react';

export const RadioGroupComponent = ({ rating, onChange }: any) => {
  return (
    <>
      <FormLabel marginTop={8} htmlFor="rating">
        Rating
      </FormLabel>

      <RadioGroup onChange={onChange} value={rating} name="rating" id="rating" className='radio-group'>
        <Stack direction="row">
          {[...Array(5)].map((_, i) => (
            <Radio key={i} value={String(i + 1)} className='radio-item'>
              {i + 1}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </>
  );
};
