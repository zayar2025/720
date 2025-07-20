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
            const output = document.getElementById('output');
            output.innerHTML = ''; // Clear previous output

            while (i < 5) {
                output.innerHTML += `whileloop(intereaction): ${i}<br>`;
                i++;
            }
        });
