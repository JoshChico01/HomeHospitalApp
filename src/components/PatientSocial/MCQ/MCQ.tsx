import React, { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MCQ.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  id: string;
  hide?: {
    radioYesRejected?: boolean;
    radioNoRejected?: boolean;
  };
  text?: {
    optionList?: ReactNode[];
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}
/* @figmaId 640:1380 */
export const MCQ: FC<Props> = memo(function MCQ(props) {
  const yesRadioClass = props.hide?.radioYesRejected ? `${classes.radioOption} ${classes.radioOptionRed}` : classes.radioOption;
  const noRadioClass = props.hide?.radioNoRejected ? `${classes.radioOption} ${classes.radioOptionRed}` : classes.radioOption;
  const [divClass, setDivClass] = useState(classes.qContent);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    
    if (option === 'yes' && props.hide?.radioYesRejected) {
      setDivClass(`${classes.qContent} ${classes.qContentRed}`);
    } else if (option === 'no' && props.hide?.radioNoRejected) {
      setDivClass(`${classes.qContent} ${classes.qContentRed}`);
    } else {
      setDivClass(classes.qContent); 
    }
  };
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={divClass}>
        <div className={classes.frame13}>
          <div className={classes.textBlock}>
            {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
              props.text?.loremIpsumDolorSitAmetConsecte
            ) : ("Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            )}
          </div>
          <div className={classes.checkBoxDiv}>
            {props.text?.optionList?.map((optionText, index) => (
              <div key={index} className={classes.checkboxNeutral}>
                <input
                  type="checkbox"
                  id={`${props.id}_${index}`}
                  className={classes.checkbox}
                />
                <label htmlFor={`${props.id}_${index}`}>{optionText}</label>
              </div>
            ))}
          </div>
        </div>
      <div className={classes.frame18}>
        <label className={yesRadioClass}>Yes
          <input
            type="radio"
            // id="yes"
            // name="yesNoQ"
            checked={selectedOption === 'yes'}
            onChange={() => handleOptionChange('yes')}
          />
        </label>
        <label className={noRadioClass}>No
          <input
            type="radio"
            // id="no"
            // name="yesNoQ"
            checked={selectedOption === 'no'}
            onChange={() => handleOptionChange('no')}
          />
        </label>
      </div>
      </div>
      <div className={classes.rectangle84}></div>
    </div>
  );
});
