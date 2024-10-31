Declare
	no integer(3):=3;
Begin
	case no
	when 1 then
	dbms...('value 1');
	when 2 then
	dbms...('value 2');
	when 3 then
	dbms...('value 3');
	else
	dbms...('no value');
	end case;
end;