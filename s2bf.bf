		Converts string to brainfuck code

		First enable extended mode
>+[[-]>+++++[<+++++>-]<++<+>-]<
	
		Move S4 to S9
>>>>[>]<[[>>>>>+<<<<<-]<]>>>>>

		For the following structure; move S9 to S12
		and S4 to S10
>[>]<[[>>>+<<<-]<]
<<<<[>>>>>>+<<<<<<-]
<<<

		Now we need a few chars:
		S2: 0x5B (bf bracket open)
		S3: 0x5D (bf bracket close)
		S4: 0x2B (plus)
		S5: 0x2D (minus)
		S6: 0x3E (gt)
		S7: 0x3C (st)
		S8: 0x2E (point)

<[-]++++++++++[>+>+++++++++>+++++++++>++++>++++>++++++>++++++>+++++<<<<<<<<-]>
>+
>+++
>+++
>+++++
>++
>
>----

		Now copy the string to the end; we need it twice
>>>++++>

[>]<[>+<-]<----[++++[>+<-]<----]++++
>>
[
	----[++++>----]++++
	[>+<-]
	<
	[[>+<-]<]

	>>[<+>-]
	>
]
<<<----[++++<----]++++
[>+<-]>
>

----[++++
			Move the 0x04 before the next char
	<[>>+<<-]>
			Prepare for char save
	<[-]>
	<
			Copy the first char
	+>>>----[++++>----]++++[>]+<----[++++<----]++++<----[++++<----]++++<-
			and copy the rest
	[<+>>>----[++++>----]++++[>]<+<----[++++<----]++++<----[++++<----]++++<-]
	<[>+<-]>

	>>
----]++++

		Move the 4 to the end
---->[>]++++[<]>[[<+>-]>]

		And move back to the start
----[++++<----]++++<----[++++<----]++++<[<<]

		Move the chars net so S11
<<<[[>>+<<-]<]>>>[>]

		Move the content 3 right and insert a space before first 0x04
>[-]++++>----[++++>----]++++>----[++++>----]++++
[>>>>+<<<<-]<----[++++[>>>>+<<<<-]<----]++++[>>>>+<<<<-]<----[++++[>>>+<<<-]<----]


		Ok; we have everything we need
		First the init loop

		Output ten times plus
<++++++++++[<<<<<.>>>>>-]

		Output the open bracket
<<<<<<<.>>>>>>>

		Now the copy part
>>>>>
----[++++
			Move the count of chars
	<[>>+<<-]>

			x = x / 10
	<<<<<[-]>[-]>[-]>[-]>[-]++++++++++

	>[<<<<<+>>>>>-]
	<<<<<[
		>>>>[<<<+>+>>-]
		<<[>>+<<-]
		<[
			>+
			<<-[>>[-]>+<<<-]
			>>>[<<<+>>>-]
			<[
				<-
				[>>>>-<<<<[-]]+
			>-]
		<-]
		>>>>+
	<<<<<]
	>>>>[-]>

			Output the gt
	<<<<<<<<.>>>>>>>>

			Ouput the pluses
	[<<<<<<<<<<.>>>>>>>>>>-]

			Remember the count of the chars
	>+<

			And move the chars two right
	<<<<<<[[>>+<<-]<]>>>[>]>>>>>
----]++++

		Output the lt
<[<<<<<<.>>>>>>-]>
		
		Output the minus; the bracket and an enter
<<<<<<<<<.<<.<<.>>>>>>>>>>>>>
[-]>
----[++++
			x mod 10
	<[-]++++++++++
	>[-<-[<+<<]<[+[->+<]<+<<]>>>>>]

			Output a gt
	<<<<<<<<<.>>>>>>>>>
			Result ist two left
			Output x times plus
	<<[<<<<<<<<<.>>>>>>>>>-]>>
			Output an enter
	<<<<<<<<<<<<<<.>>>>>>>>>>>>>>

			Remove the temp vars
	[-]<[-]<[-]<[-]<[-]<[-]<[-]
		
			And move the chars one right
	<[[>+<-]<]>>>[>]

			Move pointer to next char
	>>>>>>
----]++++
