%% Plotting the graphs of functions cx,[x], sin(ax+b), cos(ax+b),e^(ax+b), 
%% log(ax+b) and to illustrate the effects of a and b on the graphs

%Shushank

close all;
clc;

% Defne a range of x values

x = linspace(-5,5,1000);

%Define values for parameters 'a','b' and 'c'

a_values = [1,2];
b_values=[0,1];
c_values= [1,2,3];

%1. Function: c*x

figure(1);
for c = c_values
    plot(x,c*x,'DisplayName',sprintf('c=%d',c))
    hold on;
end 
hold off;
title('c \times x');
legend show;

%2. Function: [ax+b] (rounded intiger values)

figure(2);
for a = a_values
    for b = b_values
        plot(x,round(a*x+b), 'DisplayName', sprintf('a=%d', 'b=%d', a,b));
        hold on;
    end
end
hold off;
title('[a*x+b]');
legend show;

%3. Function : [a*x+b]

figure(3);
for a = a_values
    for b = b_values
        plot(x,abs(a*x+b), 'DisplayName',sprintf('a=%d , b=%d', a,b));
        hold on;
    end
end
hold off;
title('|a*x+b|');
legend show;

%4. Function sin(a*x+b)

figure(4);
for a = a_values
    for b = b_values
        plot(x,sin(a*x+b), 'DisplayName', sprintf('a=%d,b=%d', a,b))
        hold on;
    end
end
hold off;
title('sin(a*x+b)');
legend show;

%5. Function: cos(a*x+b)

figure(5);

for a = a_values
    for b = b_values
        plot(x, cos(a*x+b), 'DisplayName',sprintf('a=%d, b=%d', a,b));
 hold on;
    end
end
hold off;
title('cos(a*x+b)');
legend show;

%6. Function: e^(a*x+b)

figure(6);
for a = a_values
    for b = b_values
        plot(x,exp(a*x+b), 'DisplayName',sprintf('a=%d,b=%d',a,b));
    end
end
hold off;
title('eps(a*x+b)');
legend show;

%7. Function: log(a*x+b)

figure(7);
for a = a_values
    for b = b_values
        y = a*x+b;
        y(y<=0)=NaN; % avoid log of negative or zer0
        plot(x, log(y));
        hold on;
    end
end
hold off;
title('log(a*x+b)');
legend show;

