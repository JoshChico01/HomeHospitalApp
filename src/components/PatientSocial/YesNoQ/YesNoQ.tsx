import React, { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './YesNoQ.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    radioYesRejected?: boolean;
    radioNoRejected?: boolean;
  };
  text?: {
    loremIpsumDolorSitAmetConsecte?: ReactNode;
  };
}

export const YesNoQ: FC<Props> = memo(function YesNoQ(props) {
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
          {/* Rest of your component */}
          {props.text?.loremIpsumDolorSitAmetConsecte != null ? (
            <div className={`${classes.frameQ} ${classes.textBlock}`} >{props.text?.loremIpsumDolorSitAmetConsecte}</div>
          ) : (
            <div className={`${classes.frameQ} ${classes.textBlock}`} >Insert text</div>
          )}
        <div className={classes.frame13} >
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