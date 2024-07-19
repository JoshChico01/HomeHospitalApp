import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MCQ } from '../MCQ/MCQ.js';
import { YesNoQ } from '../YesNoQ/YesNoQ.js';
import classes from './Social.module.css';

interface Props {
  className?: string;
}
/* @figmaId 689:4679 */
export const Social: FC<Props> = memo(function Social(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.frame27}>
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>


                <div className={classes.textBlock}>Do you have plans to move in the next 5 days?</div>


              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  Do you have plans to move to a Skilled Nursing Facility or Nursing Home in the next 30 days?
                </div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Are you planning to travel in the next 30 days?</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  If traveling in the next 30 days, will you be able to accept follow up phone calls from your
                  Recovery Care Coordinator?
                </div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            // radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  Are there any special instructions for getting into your home?
                </div>
              </div>
            ),
          }}
        />
        <MCQ
          className={classes.mCQ}
          text={{
            optionList: [
              "Wheelchair",
              "Cane",
              "Transfer Bench",
              "Bedside Commode",
            ],
            loremIpsumDolorSitAmetConsecte: "Do you use any durable medical equipment to help you in your home?"
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  Do you or anyone in your home use or is involved in the selling of recreational/illicit drugs?
                </div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioNoRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  Are you comfortable with health care professionals making multiple daily visits to your home? This
                  includes but is not limited to nurses, x-ray technicians, or EMTs.
                </div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioNoRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  If other people live in your home, are they comfortable with health care professionals making
                  multiple daily visits to your home?
                </div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioNoRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  Do you have a working home telephone or mobile phone available 24/7 with which you could call the
                  Hospital at Home team in case of an emergency?
                </div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQList}
          hide={{
            radioNoRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>
                  Does your home have:
                </div>
                <ul className={classes.textBlock}>
                  <li className={classes.listBlock}>Electricity</li>
                  <li className={classes.listBlock}>Running water</li>
                  <li className={classes.listBlock}>Access to refrigeration</li>
                </ul>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Do you live alone?</div>
              </div>
            ),
          }}
        />
        <MCQ
          className={classes.mCQ}
          hide={{
            radioNoRejected: true,
          }}
          text={{
            optionList: [
              "Over 18-year-old",
              "Can support you daily activities",
              "Be able to answer medical calls",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "If you are not living alone, is the person living with you:"
            ),
          }}
        />
      </div>
    </div>
  );
});
