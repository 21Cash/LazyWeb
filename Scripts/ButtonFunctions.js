//This JS File Contains All On click Functions For Buttons


function OnClick_ShowStats() {
	
	var statsElement = document.getElementById("stats");
	
	var f = document.getElementById("classesAttended").value;
	var s = document.getElementById("totalClasses").value;
	
	stats = GetStats(f, s);
	
	var str = "Classes Attended : " + stats.classesAttended + "<br>"
				+ "Total Classe : " + stats.totalClasses + "<br>"
				+ "Attendance percentage : " + stats.percentage.toFixed(2) + "%";
	
	statsElement.innerHTML = str;
	
}


function GetStats(_classesAttended, _totalClasses) {
	
	var _percentage = (_classesAttended / _totalClasses) * 100;
	
	var stats =  {
		classesAttended : _classesAttended,
		totalClasses : _totalClasses,
		percentage : _percentage
	};
	
	return stats;
}


