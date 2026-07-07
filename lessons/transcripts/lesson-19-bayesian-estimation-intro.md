**You:**

I’m ready for my next lesson

* * *

**ChatGPT:**

Perfect. Based on where we are in the sequence, the next topic is:

# Lesson 19: Bayesian Estimation

This lesson builds directly on Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP).

So far we've asked:

* **MLE:** "Which parameter makes the observed data most likely?"
* **MAP:** "Which parameter makes the observed data most likely after taking my prior beliefs into account?"

Now we'll ask the broader question:

> **What if we don't want just one best parameter?**

Instead of producing a single estimate, we'll describe our uncertainty about the parameter itself.

---

# Part 1 — From Points to Distributions

Suppose we're estimating the bias of a coin.

Previously we computed

$$\hat\theta = 0.8$$

meaning

> "I think the probability of heads is 80%."

Bayesian statistics instead says

> "No. I don't know the probability exactly."

Instead we maintain an entire probability distribution over possible values of θ.

For example,

```
θ

0   .2   .4   .6   .8   1
│────│────│────│────│────│

          /\ 
         /  \
        /    \
_______/      \________
```

This curve answers

> "How plausible is each possible value of θ?"

---

## Vocabulary

### Prior

Your beliefs **before seeing data.**

$$P(\theta)$$

---

### Likelihood

How compatible the observed data are with each parameter.

$$P(D|\theta)$$

We've already spent several lessons studying this.

---

### Posterior

Your beliefs **after seeing the data.**

$$P(\theta|D)$$

This is the object Bayesian statistics is really about.

---

# Part 2 — Bayes' Rule

You've probably seen Bayes' theorem before.

For parameter estimation we write

$$P(\theta|D)  
=  
\frac{P(D|\theta)P(\theta)}  
{P(D)}$$

Read it as

> Posterior =  
> Likelihood × Prior ÷ Evidence

Every Bayesian algorithm is essentially an application of this equation.

---

# Part 3 — What Does the Evidence Mean?

The denominator

$$P(D)$$

often confuses people.

Notice that it does **not** depend on θ.

Instead,

$$P(D)  
=  
\int  
P(D|\theta)P(\theta)  
\,d\theta$$

It simply ensures the posterior is a valid probability distribution whose total area is 1.

You can think of it as a normalization constant.

---

# Part 4 — Why MAP Ignores the Denominator

MAP solves

$$\arg\max_\theta  
P(\theta|D)$$

Substitute Bayes' Rule:

$$\arg\max_\theta  
\frac{P(D|\theta)P(\theta)}  
{P(D)}$$

Since $P(D)$ is constant with respect to θ,

$$\arg\max_\theta  
P(D|\theta)P(\theta)$$

This is exactly why MAP was just

Likelihood + Prior.

The denominator never changes which θ is largest.

---

# Part 5 — Why Keep the Whole Distribution?

Imagine two posterior distributions.

### Case A

```
      /\
     /  \
____/    \____
```

Very narrow.

You're quite certain.

---

### Case B

```
   ______
  /      \
_/        \_
```

Much wider.

The best estimate might be the same,

but your uncertainty is much larger.

MLE and MAP throw this information away.

Bayesian inference keeps it.

---

# Exercise

Suppose your prior says

> "The coin is probably fair."

Then you flip the coin twice and observe

```
Heads
Heads
```

Without doing any calculations, answer these questions:

1. Compared with before the flips, should the posterior shift toward larger values of θ, smaller values, or neither?
2. Should your confidence be high or low after only two flips? Why?
3. If you instead observed 2,000 flips with about 60% heads, what would happen to the influence of the prior?
4. In your own words, explain why a Bayesian would prefer to keep the whole posterior distribution instead of reporting only a single number.

Take your time. I'm interested in your intuition more than formal mathematics here.

* * *

**You:**

Note Jul 3, 2026.pdfPDF

* * *

**ChatGPT:**

This is a strong answer.

Main correction: for **2 heads in 2 flips**, the posterior should shift toward larger $\theta$, but only **slightly** if the prior strongly favors fairness. You said that well.

One subtle distinction:

> “I’d still be pretty confident of my priors.”

Yes, but Bayesian confidence is about the **posterior distribution**, not just personal belief. After only two flips, the posterior should still be fairly wide. So:

$$\text{prior centered near } 0.5  
\quad+\quad  
HH  
\quad\Rightarrow\quad  
\text{posterior slightly right-shifted, still broad}$$

For 2,000 flips with 60% heads: yes. The likelihood becomes very sharp, so the prior matters much less unless the prior was extremely strong.

Your answer to 4 is especially good: keeping the whole posterior lets us track multiple hypotheses and their relative credibility, not just the winner.

Next lesson should be **Bayesian Updating with the Beta Distribution**, because it gives us an exact, computable version of this coin example.

* * *

**You:**

I should have said I’d be pretty confident in my hypothesis. I’m used to the terminology common in Rationalist circles, where we talk about our priors as beliefs that shift over time in response to evidence, and posteriors are updates to those priors. I’ll try to be more careful with the distinction.

* * *

**ChatGPT:**

That actually explains your answer perfectly.

What you're describing is very close to the language used by the rationalist community (especially LessWrong), where people speak informally about "updating your priors." Statistically, the terminology is just a bit more precise:

* **Prior** $P(\theta)$: your belief before seeing the new evidence.
* **Posterior** $P(\theta \mid D)$: your belief after incorporating the evidence.
* On the next piece of evidence, yesterday's posterior becomes today's prior.

So it's perfectly reasonable to say:

> "My posterior is still close to my prior."

or

> "My prior was strong enough that two heads only caused a small update."

That's exactly the Bayesian picture.

---

I also noticed something else in your answer that I really like. You weren't thinking solely about the parameter $\theta$; you immediately started generating **alternative causal models**:

* the coin is biased,
* the flipper has a biased technique,
* the coin has an unusual shape,
* the experiment has systematic error,
* Tymora is intervening,
* we're in a simulation.

That's the mindset of **Bayesian model comparison** rather than simple parameter estimation.

So far, we've been assuming a single model:

> "The world consists of a coin with unknown bias $\theta$."

Within that model, Bayesian inference asks, "What is $\theta$?"

Your mind naturally expanded the hypothesis space to ask,

> "What if my model of the world is wrong?"

That's a deeper level of Bayesian reasoning. Entire fields—Bayesian model selection, hierarchical Bayesian models, and probabilistic programming—are built around comparing competing models rather than just estimating parameters within one model.

For this course, we'll stay inside a single model for a while because it's the foundation everything else rests on. But I suspect you'll find the later material particularly satisfying because it formalizes the style of reasoning you were already doing intuitively.

* * *

**You:**

I have been active on LessWrong for about 20 years now, I think. I appreciate the correction in terminology.

* * *

**ChatGPT:**

That makes a lot of sense. It also explains why your intuition has consistently been more Bayesian than frequentist throughout these lessons.

One thing I've noticed over the past 18 lessons is that when I ask an intuition question, you often answer in terms of **degrees of belief** and **alternative hypotheses**, while I was sometimes expecting an answer about the mathematical object in front of us. Neither is wrong—they're just operating at different levels.

In hindsight, the MAP discussion is a good example. When I asked what MAP would do, you were reasoning about _how much your beliefs should change_ after seeing evidence. I was asking a narrower optimization question: _which parameter maximizes_ $P(D \mid \theta)P(\theta)$? Those are related but not identical.

So I'll adjust my teaching a bit.

When we're discussing a new concept, I'll try to distinguish between:

* **The mathematical question** ("What quantity are we computing?")
* **The epistemic interpretation** ("How should this affect our beliefs?")

I think that separation will mesh well with your background.

---

There's another connection I think you'll enjoy.

A lot of the rationalist vocabulary can be translated almost one-to-one into statistical language:

| Rationalist | Statistics |
| --- | --- |
| Belief | Probability distribution |
| Prior | Prior distribution $P(\theta)$ |
| Update | Bayes' Rule |
| Evidence | Likelihood $P(D \mid \theta)$ |
| Credence | Posterior probability |
| Strength of evidence | Likelihood ratio or Bayes factor |

The one place where the communities tend to diverge is that statisticians are often interested in the **machinery**—how to compute posteriors efficiently, approximate intractable integrals, choose priors, etc.—while rationalists are often focused on the **epistemology**—how an ideal reasoner ought to update beliefs.

Machine learning sits right in the middle. We care about the epistemology because it motivates the algorithms, but we spend most of our time on the computational side because that's what lets us train models with millions or billions of parameters.

I suspect you'll find the upcoming lessons on conjugate priors, Bayesian networks, variational inference, and probabilistic graphical models particularly interesting, because they connect those two perspectives in a very concrete way.