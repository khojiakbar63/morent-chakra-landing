import React from "react";
import {
  Stack,
  Checkbox,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";


export const Aside = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <aside className="p-8 hidden xl:block h-[310vh] min-w-[360px] max-w-[360px] bg-white overflow-y-auto">
      <div>
        <h4 className="mb-[28px] text-[12px] font-[600] text-[#90A3BF]">
          T Y P E
        </h4>
        <Stack spacing={5} direction="column">
          <Checkbox>
            <span>Sport</span> (10)
          </Checkbox>
          <Checkbox>
            <span>SUV</span> (12)
          </Checkbox>
          <Checkbox>
            <span>MPV</span> (16)
          </Checkbox>
          <Checkbox>
            <span>Sedan</span> (20)
          </Checkbox>
          <Checkbox>
            <span>Coupe</span> (14)
          </Checkbox>
          <Checkbox>
            <span>Hatchback</span> (14)
          </Checkbox>
        </Stack>
      </div>

      <div>
        <h4 className="mb-[28px] mt-[56px] text-[12px] font-[600] text-[#90A3BF]">
          C A P A C I T Y
        </h4>
        <Stack spacing={5} direction="column">
          <Checkbox>
            <span>2 Person</span> (10)
          </Checkbox>
          <Checkbox>
            <span>4 Person</span> (14)
          </Checkbox>
          <Checkbox>
            <span>6 Person</span> (12)
          </Checkbox>
          <Checkbox>
            <span>8 or More</span> (16)
          </Checkbox>
        </Stack>
      </div>

      <div>
        <h4 className="mb-[28px] mt-[56px] text-[12px] font-[600] text-[#90A3BF]">
          P R I C E
        </h4>
        <Flex direction={"column-reverse"}>
          
          <Slider
            flex="1"
            focusThumbOnChange={false}
            value={value}
            onChange={handleChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize="32px" children={value} />
          </Slider>
        </Flex>
        <p className="font-[600] text-[20px] text-[#596780]">Max. $100.00</p>
      </div>
    </aside>
  );
};
