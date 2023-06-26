# Quine McCluskey Solver

## Table Of Contents:

* [Overview](#overview)
* [Objectives](#objectives)
* [Features](#features)
* [License](#license)

## Overview

Quine McCluskey Solver is a web application aiming to provide an easy-to-use step-by-step minimizer for any single digital function. Throughout the development process of this application, we focused on every aspect of quality from the very small details till the core functionality of the application because we believe that one day, our program will grow and become one of the essential tools used by university students all over the world.

Our program is written in JavaScript which makes it a universal application that can run on any operating system, in addition to the responsiveness of its graphical user interface.

Unlike many of the present Quine McCluskey Solvers, our solution don’t just let you know the final minimized function, instead, it shows you the full steps of minimization exactly like what you write when doing minimization during exams.

## Objectives

Quine McCluskey Solver is designed to be an easy solution for digital design students which makes them able to verify their solutions of minimization problems quickly. In addition, our web application can be used at a large scale by every logical circuits designer who wants to minimize functions involving large number of inputs in a very short period of time.

## Features

* **Design Language:** We have a strong belief that an eye-catching GUI of any application plays a major role in attracting more users to that application in a shorter period of time. As a result, we have designed the GUI of Quine McCluskey Solver according the guidelines of Google Material Design. We tried to adhere to every detail mentioned in the documentations of the design language including color palettes and styling of buttons, cards and text fields. We have used Rubik as the default font used throughout the pages of our application.

* **Inputs Number Detection:** Instead of manually entering number of variables of the digital function needed to be minimized, our application automatically calculates it according to the number of bits of the largest entered minterm. In case you want to make number of inputs more than the least one, feel free to manually enter it in the specified text box found on the homepage.

* **Wide Range Of Inputs:** Our application can handle a number of inputs as big as the number of English alphabetical letters. By supporting up to 2^26 minterms, we can say that Quine McCluskey Solver is not just suitable for students only but engineers and designers of logical circuits. We have put the limitation of 26 inputs for nothing, but because we prefer representing the minimized function in a homogenous notation constructed from only capital English letters. This makes function easier to be read and understood.

* **Step-By-Step Solving**: One of the strong points that makes our solution unique is solving any minimization problem like if it was a human solving such problem during exam. Our program minimize functions using the well-known minimizing procedure that starts by tabulating minterms to find prime implicants, then finding essential prime implicants by detection of unique minterms and applying row and column dominance and finally applying the Petrick's method if necessary. Furthermore, our application shows all other these steps in organized numbered tables and cards to ensure that such steps are understandable by everyone.

* **Compatible & Responsive:** One of the features of our application is the simplicity and responsiveness of its GUI which makes it viewable on any device form. In addition, it can run on any operating system having modern web browser installed.

## License

*Quine McCluskey Solver* is released under the **GNU AGPLv3** license.