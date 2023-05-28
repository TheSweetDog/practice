import java.awt.*;
import java.awt.event.*;
import java.util.*;
import javax.swing.*;

public class startPage implements ActionListener {

    JFrame frame = new JFrame();
    JButton start = new JButton("start");
    JLabel name = new JLabel("Test!");

    startPage() {

        name.setBounds(95, 130, 215, 25);
        name.setFont(new Font("Arial", Font.BOLD, 25));
        name.setForeground(new Color(0, 0, 0));
        name.setHorizontalAlignment(JLabel.CENTER);

        start.setBounds(150, 200, 100, 40);
        start.setBackground(new Color(255, 255, 255));
        start.setForeground(new Color(0, 0, 0));
        start.setFocusable(false);
        start.setFont(new Font("Arial", Font.BOLD, 20));
        start.addActionListener(this);

        frame.add(name);
        frame.add(start);

        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420, 420);
        frame.setLayout(null);
        frame.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == start) {
            frame.dispose();
            TicTacToe tictactoe = new TicTacToe();
        }

    }

}
