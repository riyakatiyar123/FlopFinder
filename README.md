<!DOCTYPE html>
<html>
<head>
    <title>FlopFinder</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<h1>FlopFinder - Movie Risk Predictor</h1>

<div class="form">

<label>Production Budget (in million $)</label>
<input type="number" id="budget">

<label>Marketing Budget</label>
<input type="number" id="marketing">

<label>Cast Popularity (1-10)</label>
<input type="number" id="cast">

<label>Expected Rating (1-10)</label>
<input type="number" id="rating">

<button onclick="predict()">Predict Risk</button>

<h2 id="result"></h2>

</div>

<script src="script.js"></script>

</body>
</html>
