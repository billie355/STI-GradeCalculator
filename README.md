# STI Grade Calculator & Target Grade Predictor

This project is a web-based tool designed to help STI students calculate their General Weighted Average (GWA) and predict the grades needed to pass or achieve a specific target.

## Features

### 1. Grade Computer (`index.html`)
The main calculator computes the final grade based on the standard STI weighting system:
- **Prelim:** 20%
- **Midterm:** 20%
- **Pre-Finals:** 20%
- **Finals:** 40%

**Functionality:**
- Accepts grades between 0 and 100.
- Computes the **Weighted Average** (rounded to 2 decimal places).
- Converts the average to a **Point Grade** (1.00 to 5.00) using the official grading scale.
- Displays the status (**PASSED** or **FAILED**).
  - **Passing Grade:** 3.00 (Weighted Average of 59.50 or higher).

**Grading Scale:**
- **1.00:** 97.50 - 100%
- **1.25:** 94.50 - 97.49%
- **1.50:** 91.50 - 94.49%
- **1.75:** 86.50 - 91.49%
- **2.00:** 81.50 - 86.49%
- **2.25:** 76.00 - 81.49%
- **2.50:** 70.50 - 75.99%
- **2.75:** 65.00 - 70.49%
- **3.00:** 59.50 - 64.99%
- **5.00:** 59.49% and below

### 2. Target Grade Calculator (`target.html`)
A predictive tool that helps students plan their grades.

**Functionality:**
- Users can set a **Target GWA** (default is 59.50 for passing).
- Users input the grades they already have.
- The system calculates the **exact grade needed** in the remaining terms to hit the target.
- **Auto-Fill:** Automatically fills empty fields with the required grade and highlights them in yellow.
- **Status Indicators:**
  - **SECURED:** If the student has already achieved the target regardless of future grades.
  - **IMPOSSIBLE:** If it is mathematically impossible to reach the target even with perfect scores.

## Created By
Billy
