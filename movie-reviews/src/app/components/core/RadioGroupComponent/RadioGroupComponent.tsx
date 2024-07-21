import { FormLabel, Radio, RadioGroup, Stack, VisuallyHidden } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import './radio-styles.css';

export const RadioGroupComponent = ({ label, valuei, onChange }: any) => {
  return (
    <>
      {label && (
        <FormLabel marginTop={8} htmlFor="valuei">
          {label}
        </FormLabel>
      )}

      <RadioGroup onChange={onChange} value={valuei} name="rating" id="rating">
        <Stack direction="row-reverse" justifyContent="flex-end" gap={1}>
          {Array.from({ length: 5 }, (_, i) => (
            <Radio key={i} value={String(5 - i)}>
              <StarIcon color="gray.300" boxSize={6} className="rating-star" />
              <VisuallyHidden>{5 - i}</VisuallyHidden>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </>
  );
};
