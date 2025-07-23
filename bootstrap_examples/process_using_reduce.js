// ===== Reduce Example: Progress Summary =====
  const completionPercentages = [20, 30, 25, 25]; 
  const total = completionPercentages.reduce((acc, val) => acc + val, 0);
  const progressBar = document.getElementById('summaryProgress');
  progressBar.style.width = `${total}%`;
  progressBar.innerText = `${total}%`;
