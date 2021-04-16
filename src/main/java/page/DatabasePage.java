package page;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabasePage {

	public String getData(String columnName) throws Exception {
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/october2021","root", "root");
		Statement smt = con.createStatement();
		ResultSet rs = smt.executeQuery("select * from students");
		while(rs.next()) {
			return rs.getString(columnName);
		}
		
		return columnName;
		
	}

	
}
