declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    constructor(
      target: string | Element | Element[] | string[],
      vars?: Record<string, unknown>
    );

    revert(): void;
  }
}
