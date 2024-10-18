function arrayModifier(arr){
    let nums = arr.shift().split(` `).map(Number);
    let command = arr.shift();

    while (command !== 'end') {
        let tokens = command.split(' ');
        let action = tokens.shift();
        let index1 = Number(tokens.shift());
        let index2 = Number(tokens.shift());

        if(action === 'swap') {
            let num1 = nums[index1];
            let num2 = nums[index2];

            nums[index2] = num1;
            nums[index1] = num2;
        
        } else if (action === 'multiply'){
            let num1 = nums[index1];
            let num2 = nums[index2];
            let product = num1 * num2
            nums[index1] = product;
        
        } else if (action === 'decrease') {
            nums = nums.map(x => Number(x - 1));
        }
        command = arr.shift();
    }
    console.log(nums.join(', '));

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])