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
      <div className={classes.titleBlock}>Stable/ Chronic Conditions</div>
      <div className={classes.frame29}>
        <YesNoQ
          className={classes.yesNoQ}
          hide={{
            radioYesRejected: true,
          }}
          text={{
            loremIpsumDolorSitAmetConsecte: (
              "COPD with unstable severe cardiac comorbidities"
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
              "Arterial blood gas measurements required"
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
              "Required cardiac monitoring or intensive care"
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
              "Need for mechanical ventilation"
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
              "On methadone requiring daily pickup of medication"
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
              "Active drug abuse"
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
              "Active drug abuse"
            ),
          }}
        />
        <MCQ
          className={classes.mCQ}
          id={'secondaryConditionOpt'}
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
          id={'immunosuppressionOpt'}
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
