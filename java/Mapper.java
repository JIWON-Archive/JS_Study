package java;

import java.util.List;

public interface Mapper {
    public List<Dto> selectPerformOrder(Dto dto);
    public int selectPerformOrderCount(Dto dto);
    public List<Dto> selectLotDetail(Dto dto);
    public int selectLotDetailCount(Dto dto);
}
