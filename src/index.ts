class ExcitedCells {
  proceed = (steps: number, series: number[]): number[] => {
    if (this.stepsEqualsZero(steps)) {
      return series;
    }

    return [];
  };

  /**
   * Utilities.
   */
  private stepsEqualsZero = (steps: number): boolean => !steps;
}

export default ExcitedCells;
