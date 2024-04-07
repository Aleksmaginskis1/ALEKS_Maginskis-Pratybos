function reverseANumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverseANumber(65456)));