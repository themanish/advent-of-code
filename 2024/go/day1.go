package main

import "os"

func main() {
	contents, err := os.ReadFile("../input/day1.txt")
	if err != nil {
		panic(err)
	}

	println(string(contents))
}
