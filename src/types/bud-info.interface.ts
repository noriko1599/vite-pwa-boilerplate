interface IStrainEffects {
  feelings: string[];
  negatives: string[];
}

interface IHelpwith {
  stress: string;
  depression: string;
  anxiety: string;
}

export interface IBudInfo {
  name: string;
  aka?: string;
  family: string;
  images?: string[];
  cbgPercent: number;
  thcPercent: number;
  effectRate: number;
  mostEffect: string;
  description: string;
  flavor: string;
  strainEffects: IStrainEffects;
  strainFalvors: string[];
  helpWith: IHelpwith;
}
