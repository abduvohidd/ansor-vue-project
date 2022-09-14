<template>
  <div class="container">
    <h1 class="problems-text">
      We give more <span :class="(isActive = 'active')">solutions</span>
      solutions to problems in our project
    </h1>

    <div class="solution-problems">
      <div class="solution-problem">
        <img class="red" src="@/assets/fault.svg" alt="" />

        <ul>
          <li>
            Real-life examples: A clogged toilet is an annoying problem. A rock
            in your shoe is often just a small problem. An international war is
            a big problem that causes many other problems for a large number of
            people.
          </li>
          <li>
            Used in a sentence: I need to pass this final exam or I am going to
            have a big problem with the grade for this class!
          </li>
        </ul>
      </div>

      <div class="solution-problem">
        <img class="green" src="@/assets/true.svg" alt="" />
        <ul>
          <li>
            Used in a sentence: Instead of labeling someone a “problem child,”
            we should try to understand why the child acts the way they do.
          </li>
          <li>
            A problem is a question or puzzle that is intended to be solved or
            to be deeply thought about.
          </li>
          <li>
            Real-life examples: Your teacher may present a problem to the class
            so you can use what you’ve learned to solve it. Scientists present
            problems to other scientists so they can work together to think
            about them and discover new information.
          </li>
          <li>
            Used in a sentence: Ivan managed to solve the problem of how to
            separate the rocks and the sand.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.problems-text {
  display: flex;
  align-items: flex-start;
  padding-top: 3rem;
}
.solution-problems {
  display: flex;
  width: 100%;
  margin: 3rem 0;
}
.solution-problem {
  width: 32%;
  text-align: start;
  padding-bottom: 2rem;
  margin-right: 15rem;
}
.solution-problem ul li {
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #19172c;
  opacity: 0.7;
  margin: 15px 0;
}
.solution-problem .red {
  padding: 1rem;
  border: 1px solid red;
  border-radius: 50%;
  margin-bottom: 15px;
}
.solution-problem .green {
  padding: 1rem;
  border: 1px solid green;
  border-radius: 50%;
  margin-bottom: 15px;
}
</style>