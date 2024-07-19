import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { YesNoQ } from '../../PatientSocial/YesNoQ/YesNoQ';
import classes from './MedicalStable.module.css';
import { MCQ } from '../../PatientSocial/MCQ/MCQ';

interface Props {
  className?: string;
}
/* @figmaId 689:6610 */
export const MedicalStable: FC<Props> = memo(function MedicalStable(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle98}></div>
      <div className={classes.titleBlock}>Stable/ Chronic Conditions</div>
      <div className={classes.frame29}>
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>COPD with unstable severe cardiac comorbidities</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Arterial blood gas measurements required</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Required cardiac monitoring or intensive care</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Need for mechanical ventilation</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>On methadone requiring daily pickup of medication</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Active drug abuse</div>
              </div>
            ),
          }}
        />
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                <div className={classes.textBlock}>Active drug abuse</div>
              </div>
            ),
          }}
        />
        <MCQ
          className={classes.mCQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            optionList: [
              "Active nonmelanoma",
              "Prostate cancer",
              "End-stage renal disease",
              "Acute myocardial infarction",
              "Acute cerebral vascular accident",
              "Acute hemorrhage",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "Secondary condition"
            ),
          }}
        />
        <MCQ
          className={classes.mCQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            optionList: [
              "AIDS",
              "Neutropenia",
              "Organ transplant with immunosuppressive therapy",
              "Chemotherapy or cytotoxic drug use",
              "Multiple myeloma",
              "Lymphoma",
            ],
            loremIpsumDolorSitAmetConsecte: (
              "Severe immunosuppression (not auto reject, need to be discussed with the medical team)"
            ),
          }}
        />
      </div>
    </div>
  );
});
