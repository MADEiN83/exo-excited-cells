enum State {
  QUIET,
  EXCITED,
}

class ExcitedCells {
  private steps: number;
  private state: number[];

  proceed = (steps: number = 0, state: number[] = []): number[] => {
    this.steps = steps;
    this.state = state;

    if (this.stepsEqualZero()) {
      return state;
    }

    const arrayOfCounters = state.map(this.checkExcitedNeighbors);
    const newComputedCellsState = this.computeNewCellStates(arrayOfCounters);

    return this.proceed(--steps, newComputedCellsState);
  };

  /**
   * Utilities.
   */
  private stepsEqualZero = (): boolean => !this.steps;

  private checkExcitedNeighbors = (_, index): number => {
    const cellPositions = this.computeAllCellPositions(index);
    const counter = cellPositions.reduce(this.countExcitedNeighbors, 0);
    return counter;
  };

  private computeAllCellPositions = (index: number): number[] => {
    const { state } = this;
    const positions = {
      first: 0,
      last: state.length - 1,
      next: index + 1,
      previous: index - 1,
    };

    const isFirstCell = index === positions.first;
    const isLastCell = index === positions.last;
    let cellPositions: number[] = [];

    if (isFirstCell) {
      cellPositions = [positions.last, positions.next];
    } else if (isLastCell) {
      cellPositions = [positions.previous, positions.first];
    } else {
      cellPositions = [positions.previous, positions.next];
    }

    return cellPositions;
  };

  private countExcitedNeighbors = (
    counter: number,
    cellIndex: number
  ): number => {
    this.state[cellIndex] === State.EXCITED && counter++;
    return counter;
  };

  private computeNewCellStates = (arrayOfCounters: number[]) => {
    return arrayOfCounters.map((value) =>
      value === 1 ? State.EXCITED : State.QUIET
    );
  };
}

export default ExcitedCells;
