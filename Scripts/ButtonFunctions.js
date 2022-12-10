//This JS File Contains All On click Functions For Buttons


const minAttendance = 75;
const classesPerDay = 7;


var targetAttendance = 90;

function OnClick_ShowStats() {
	
	var statsElement = document.getElementById("stats");
	
	var f = document.getElementById("classesAttended").value;
	var s = document.getElementById("totalClasses").value;
	targetAttendance = document.getElementById("targetAttendance").value;

	stats = GetStats(f, s);
	
	var str = "Classes Attended : " + stats.classesAttended + "<br>"
				+ "Total Classes : " + stats.totalClasses + "<br>"
				+ "Attendance percentage : " + stats.percentage.toFixed(2) + "% <br>"
				+ "Continuous Leaves : " + stats.continuousClassLeaves + " classes or " + stats.continuousDayLeaves + " days<br>" 
				+ "To Gain " + targetAttendance + "% Attendance : " + stats.continuousClassesToPresent + " classes or " + stats.continuousDaysToPresent + " days";
	statsElement.innerHTML = str;
	
}




function GetStats(_classesAttended, _totalClasses) {
	
	var _percentage = GetPercentage(_classesAttended, _totalClasses);
	var conLeaveStats = GetContinuousLeaves(_classesAttended, _totalClasses);
	var conPresentStats = GetClassesToBePresent(_classesAttended, _totalClasses);
	var stats =  {
		classesAttended : _classesAttended,
		totalClasses : _totalClasses,
		continuousClassLeaves : conLeaveStats.classes,
		continuousDayLeaves : conLeaveStats.days,
		continuousClassesToPresent : conPresentStats.classes,
		continuousDaysToPresent : conPresentStats.days,
		percentage : _percentage
	};
	
	return stats;
}

function GetPercentage(classesAttended, totalClasses) {
	
	return (classesAttended / totalClasses) * 100;
	
}



// This Function Return the Continous Class Leaves And Day Leaves Which can be taken
function GetContinuousLeaves(_present, _total) {
	
	var _p = _present;
	var _t = _total;
	
	var tAttendance  = GetPercentage(_p, _t);
	
	var cnt = 0;
	
	while(tAttendance > minAttendance) {
		_t++;
		tAttendance = GetPercentage(_p, _t);
		cnt++;
	}
	
	var leaveDays = cnt / classesPerDay;
	
	var leaveStats = {
		classes : cnt,
		days : leaveDays.toFixed(2)	
	};
	
	return leaveStats;
}

function GetClassesToBePresent(_present, _total) {
	
	var _t = GetPercentage(_present, _total);
	
	var cnt = 0;
	
	while(_t < targetAttendance) {
		_present++;
		_total++;
		
		_t = GetPercentage(_present, _total);
		cnt++;
	}
	
	var leaveDays = cnt / classesPerDay;
	
	var leaveStats = {
		classes : cnt,
		days : leaveDays.toFixed(2)	
	};
	return leaveStats;
}