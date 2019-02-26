import { h } from 'hyperapp';

export default () => (
  <div class="counter">
    <section>
      <button
        class="sub"
        // onclick={sub}
        // disabled={num < 1}
      >
        -
      </button>
      <h1 class="count">2</h1>
      <button
        class="add"
        // onclick={add}
      >
        +
      </button>
    </section>
  </div>
);
