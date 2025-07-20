// Initialization
// let i = 0;
// // Condition ကို စစ်ဆေးပြီး loop ဝင်ခြင်း
// while (condition) {
//   // Loop body (statements)
//   // ...
//   // Increment (or decrement) - loop variable ကို update လုပ်ခြင်း
//   i++;
// }

       
document.getElementById('startLoop').addEventListener('click', function() {
    let i = 0;
    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = ''; // Loop အသစ်မစခင် အရင် output တွေကို ရှင်းလင်းပါ

    while (i < 5) {
        const outputItem = document.createElement('div');
        outputItem.classList.add('output-item');
        outputItem.textContent = `whileloop(iteration): ${i}`;
        outputContainer.appendChild(outputItem);
        i++;
    }
});

document.getElementById('restart').addEventListener('click', function() {
    const outputContainer = document.getElementById('output-container');
    // အရင် output တွေကို ရှင်းလင်းပြီး မူရင်းစာသားကို ပြန်ထည့်ပါ
    outputContainer.innerHTML = '<p class="initial-message">Output နေရာတွင် loop ၏ ရလဒ်များ ပေါ်လာမည်...</p>'; 
});
